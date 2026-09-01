import { logError } from './logger';

interface ReportErrorOptions {
  context?: string;
  payload?: unknown;
}

/**
 * Swap the body for a vendor SDK (Sentry, Datadog). The starter only logs.
 */
export const reportError = (
  message: string,
  options?: ReportErrorOptions
): void => {
  logError(message, options);
};
