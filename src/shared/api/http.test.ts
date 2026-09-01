import { delay, http, HttpResponse } from 'msw';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { apiUrl, server } from '@/shared/testing';

import { ApiError } from './api-error';
import { configureHttpAuth, requestJson } from './http';

const resetHttpAuth = () => {
  configureHttpAuth({
    getAuthToken: () => null,
    onUnauthorized: () => undefined
  });
};

afterEach(() => {
  resetHttpAuth();
});

describe('requestJson', () => {
  it('parses a JSON response', async () => {
    server.use(
      http.get(apiUrl('/ping'), () => HttpResponse.json({ status: 'ok' }))
    );

    const response = await requestJson<{ status: string }>({ path: '/ping' });

    expect(response).toEqual({ status: 'ok' });
  });

  it('attaches the token from the configured getter', async () => {
    const receivedHeaders: string[] = [];

    server.use(
      http.get(apiUrl('/me'), ({ request }) => {
        receivedHeaders.push(request.headers.get('authorization') ?? '');

        return HttpResponse.json({ id: 1 });
      })
    );

    configureHttpAuth({
      getAuthToken: () => 'token-from-session',
      onUnauthorized: () => undefined
    });

    await requestJson({ path: '/me' });

    expect(receivedHeaders).toEqual(['Bearer token-from-session']);
  });

  it('skips the token when auth is explicitly disabled', async () => {
    const receivedHeaders: (string | null)[] = [];

    server.use(
      http.get(apiUrl('/public'), ({ request }) => {
        receivedHeaders.push(request.headers.get('authorization'));

        return HttpResponse.json({});
      })
    );

    configureHttpAuth({
      getAuthToken: () => 'token-from-session',
      onUnauthorized: () => undefined
    });

    await requestJson({ path: '/public', isAuthSkipped: true });

    expect(receivedHeaders).toEqual([null]);
  });

  it('calls onUnauthorized and throws ApiError on 401', async () => {
    const handleUnauthorized = vi.fn();

    server.use(
      http.get(apiUrl('/secret'), () => {
        return HttpResponse.json({ message: 'Token expired' }, { status: 401 });
      })
    );

    configureHttpAuth({
      getAuthToken: () => 'expired',
      onUnauthorized: handleUnauthorized
    });

    await expect(requestJson({ path: '/secret' })).rejects.toThrowError(
      ApiError
    );
    expect(handleUnauthorized).toHaveBeenCalledOnce();
  });

  it('refreshes the token once and retries the original request', async () => {
    const handleUnauthorized = vi.fn();
    let accessToken = 'expired';
    const refreshAccessToken = vi.fn(() => {
      accessToken = 'fresh';

      return Promise.resolve(accessToken);
    });

    server.use(
      http.get(apiUrl('/secret'), ({ request }) => {
        if (request.headers.get('authorization') === 'Bearer fresh') {
          return HttpResponse.json({ ok: true });
        }

        return HttpResponse.json({ message: 'Token expired' }, { status: 401 });
      })
    );

    configureHttpAuth({
      getAuthToken: () => accessToken,
      onUnauthorized: handleUnauthorized,
      refreshAccessToken
    });

    await expect(
      requestJson<{ ok: boolean }>({ path: '/secret' })
    ).resolves.toEqual({ ok: true });
    expect(refreshAccessToken).toHaveBeenCalledOnce();
    expect(handleUnauthorized).not.toHaveBeenCalled();
  });

  it('shares one refresh across parallel 401 responses', async () => {
    const handleUnauthorized = vi.fn();
    let accessToken = 'expired';
    const refreshAccessToken = vi.fn(async () => {
      await delay(20);
      accessToken = 'fresh';

      return accessToken;
    });

    server.use(
      http.get(apiUrl('/secret'), ({ request }) => {
        if (request.headers.get('authorization') === 'Bearer fresh') {
          return HttpResponse.json({ ok: true });
        }

        return HttpResponse.json({ message: 'Token expired' }, { status: 401 });
      })
    );

    configureHttpAuth({
      getAuthToken: () => accessToken,
      onUnauthorized: handleUnauthorized,
      refreshAccessToken
    });

    const [first, second] = await Promise.all([
      requestJson<{ ok: boolean }>({ path: '/secret' }),
      requestJson<{ ok: boolean }>({ path: '/secret' })
    ]);

    expect(first).toEqual({ ok: true });
    expect(second).toEqual({ ok: true });
    expect(refreshAccessToken).toHaveBeenCalledOnce();
    expect(handleUnauthorized).not.toHaveBeenCalled();
  });

  it('calls onUnauthorized when refresh returns no token', async () => {
    const handleUnauthorized = vi.fn();
    const refreshAccessToken = vi.fn(() => {
      return Promise.resolve(null);
    });

    server.use(
      http.get(apiUrl('/secret'), () => {
        return HttpResponse.json({ message: 'Token expired' }, { status: 401 });
      })
    );

    configureHttpAuth({
      getAuthToken: () => 'expired',
      onUnauthorized: handleUnauthorized,
      refreshAccessToken
    });

    await expect(requestJson({ path: '/secret' })).rejects.toThrowError(
      ApiError
    );
    expect(refreshAccessToken).toHaveBeenCalledOnce();
    expect(handleUnauthorized).toHaveBeenCalledOnce();
  });

  it('does not refresh or notify when unauthorized handling is skipped', async () => {
    const handleUnauthorized = vi.fn();
    const refreshAccessToken = vi.fn(() => {
      return Promise.resolve('fresh');
    });

    server.use(
      http.post(apiUrl('/auth/login'), () => {
        return HttpResponse.json({ message: 'Invalid' }, { status: 401 });
      })
    );

    configureHttpAuth({
      getAuthToken: () => 'stale',
      onUnauthorized: handleUnauthorized,
      refreshAccessToken
    });

    await expect(
      requestJson({
        path: '/auth/login',
        method: 'POST',
        body: {},
        isAuthSkipped: true,
        isUnauthorizedSkipped: true
      })
    ).rejects.toThrowError(ApiError);
    expect(refreshAccessToken).not.toHaveBeenCalled();
    expect(handleUnauthorized).not.toHaveBeenCalled();
  });

  it('exposes the server message and field errors on the error', async () => {
    server.use(
      http.post(apiUrl('/form'), () => {
        return HttpResponse.json(
          {
            message: 'Validation failed',
            fieldErrors: { username: 'Already taken' }
          },
          { status: 422 }
        );
      })
    );

    await expect(
      requestJson({ path: '/form', method: 'POST', body: {} })
    ).rejects.toMatchObject({
      status: 422,
      message: 'Validation failed',
      details: { fieldErrors: { username: 'Already taken' } }
    });
  });

  it('resolves to undefined for an empty response body', async () => {
    server.use(
      http.delete(
        apiUrl('/items/1'),
        () => new HttpResponse(null, { status: 204 })
      )
    );

    const response = await requestJson({
      path: '/items/1',
      method: 'DELETE'
    });

    expect(response).toBeUndefined();
  });

  it('maps a network failure to ApiError with status 0', async () => {
    server.use(http.get(apiUrl('/down'), () => HttpResponse.error()));

    await expect(requestJson({ path: '/down' })).rejects.toMatchObject({
      name: 'ApiError',
      status: 0,
      message: 'Network request failed'
    });
  });

  it('times out and maps the abort to ApiError with status 0', async () => {
    server.use(
      http.get(apiUrl('/slow'), async () => {
        await delay(50);

        return HttpResponse.json({ ok: true });
      })
    );

    await expect(
      requestJson({ path: '/slow', timeoutMs: 1 })
    ).rejects.toMatchObject({
      name: 'ApiError',
      status: 0,
      message: 'Request timed out'
    });
  });

  it('propagates an abort from the caller signal', async () => {
    const controller = new AbortController();

    server.use(
      http.get(apiUrl('/hang'), async () => {
        await delay(50);

        return HttpResponse.json({ ok: true });
      })
    );

    const request = requestJson({ path: '/hang', signal: controller.signal });
    controller.abort();

    await expect(request).rejects.toSatisfy((error: unknown) => {
      return error instanceof Error && error.name === 'AbortError';
    });
  });
});
