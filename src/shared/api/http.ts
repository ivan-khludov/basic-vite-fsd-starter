import { APP_CONFIG } from '@/shared/config';

import { ApiError, type ApiErrorDetails } from './api-error';

type HttpMethod = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

type AuthTokenGetter = () => string | null;

type UnauthorizedHandler = () => void;

type RefreshAccessToken = () => Promise<string | null>;

interface HttpAuthOptions {
  getAuthToken: AuthTokenGetter;
  onUnauthorized: UnauthorizedHandler;
  refreshAccessToken?: RefreshAccessToken;
}

let readAuthToken: AuthTokenGetter = () => null;

let notifyUnauthorized: UnauthorizedHandler = () => undefined;

let refreshAccessToken: RefreshAccessToken | undefined;

let refreshInFlight: Promise<string | null> | null = null;

/**
 * Wires the session layer into the transport without making `shared` depend on
 * `entities`. Called once during app bootstrap.
 */
export const configureHttpAuth = ({
  getAuthToken,
  onUnauthorized,
  refreshAccessToken: nextRefreshAccessToken
}: HttpAuthOptions) => {
  readAuthToken = getAuthToken;
  notifyUnauthorized = onUnauthorized;
  refreshAccessToken = nextRefreshAccessToken;
  refreshInFlight = null;
};

const refreshOnce = async (): Promise<string | null> => {
  if (!refreshAccessToken) {
    return null;
  }

  if (!refreshInFlight) {
    refreshInFlight = refreshAccessToken().finally(() => {
      refreshInFlight = null;
    });
  }

  return refreshInFlight;
};

export interface RequestJsonOptions {
  path: string;
  method?: HttpMethod;
  body?: unknown;
  headers?: HeadersInit;
  authToken?: string;
  isAuthSkipped?: boolean;
  isUnauthorizedSkipped?: boolean;
  signal?: AbortSignal;
  timeoutMs?: number;
}

const NETWORK_ERROR_STATUS = 0;

const buildUrl = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return new URL(normalizedPath, APP_CONFIG.api.baseUrl).toString();
};

const tryParseJson = async (response: Response): Promise<unknown> => {
  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.includes('application/json')) {
    return undefined;
  }

  try {
    return await response.json();
  } catch {
    return undefined;
  }
};

const toApiError = (response: Response, parsedBody: unknown): ApiError => {
  let message = `Request failed with status ${response.status}`;
  let details: ApiErrorDetails | undefined;

  if (typeof parsedBody === 'object' && parsedBody !== null) {
    const body = parsedBody as Record<string, unknown>;

    if (typeof body.message === 'string') {
      message = body.message;
    }

    if (body.fieldErrors && typeof body.fieldErrors === 'object') {
      details = {
        fieldErrors: body.fieldErrors as Record<string, string | string[]>
      };
    }
  }

  return new ApiError(message, response.status, details);
};

const isAbortError = (error: unknown): error is Error => {
  return error instanceof Error && error.name === 'AbortError';
};

const mergeAbortSignals = (
  timeoutMs: number,
  userSignal?: AbortSignal
): { requestSignal: AbortSignal; timeoutSignal: AbortSignal } => {
  const timeoutSignal = AbortSignal.timeout(timeoutMs);

  if (!userSignal) {
    return { requestSignal: timeoutSignal, timeoutSignal };
  }

  return {
    requestSignal: AbortSignal.any([userSignal, timeoutSignal]),
    timeoutSignal
  };
};

const toNetworkError = (
  error: unknown,
  userSignal: AbortSignal | undefined,
  timeoutSignal: AbortSignal
): Error => {
  if (userSignal?.aborted) {
    return isAbortError(error)
      ? error
      : new DOMException('Aborted', 'AbortError');
  }

  if (timeoutSignal.aborted) {
    return new ApiError('Request timed out', NETWORK_ERROR_STATUS);
  }

  return new ApiError('Network request failed', NETWORK_ERROR_STATUS);
};

export const requestJson = async <TResponse>(
  options: RequestJsonOptions
): Promise<TResponse> => {
  const {
    path,
    method = 'GET',
    body,
    headers,
    authToken,
    isAuthSkipped = false,
    isUnauthorizedSkipped = false,
    signal,
    timeoutMs = APP_CONFIG.api.requestTimeoutMs
  } = options;

  const resolveToken = (hasRetriedRefresh: boolean) => {
    if (isAuthSkipped) {
      return undefined;
    }

    if (hasRetriedRefresh) {
      return readAuthToken();
    }

    return authToken ?? readAuthToken();
  };

  const sendRequest = async (hasRetriedRefresh: boolean) => {
    const requestHeaders = new Headers(headers);

    if (body !== undefined && body !== null) {
      requestHeaders.set('content-type', 'application/json');
    }

    const token = resolveToken(hasRetriedRefresh);

    if (token) {
      requestHeaders.set('authorization', `Bearer ${token}`);
    }

    const { requestSignal, timeoutSignal } = mergeAbortSignals(
      timeoutMs,
      signal
    );

    let response: Response;

    try {
      response = await fetch(buildUrl(path), {
        method,
        headers: requestHeaders,
        body:
          body === undefined || body === null
            ? undefined
            : JSON.stringify(body),
        signal: requestSignal
      });
    } catch (error) {
      throw toNetworkError(error, signal, timeoutSignal);
    }

    const parsedBody = await tryParseJson(response);

    return { parsedBody, response };
  };

  let hasRetriedRefresh = false;

  while (true) {
    const { parsedBody, response } = await sendRequest(hasRetriedRefresh);

    if (response.ok) {
      // Responses without a body (204, empty DELETE) resolve to undefined
      // instead of failing, so callers can type them as `void`.
      return parsedBody as TResponse;
    }

    if (response.status === 401 && !isUnauthorizedSkipped) {
      if (!hasRetriedRefresh) {
        const nextToken = await refreshOnce();

        if (nextToken) {
          hasRetriedRefresh = true;
          continue;
        }
      }

      notifyUnauthorized();
    }

    throw toApiError(response, parsedBody);
  }
};
