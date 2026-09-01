export interface ApiErrorDetails {
  fieldErrors?: Record<string, string | string[]>;
}

export class ApiError extends Error {
  public readonly status: number;
  public readonly details?: ApiErrorDetails;

  constructor(message: string, status: number, details?: ApiErrorDetails) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

export const isNetworkApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError && error.status === 0;
};

export const isUnauthorizedApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError && error.status === 401;
};
