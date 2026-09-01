type LogLevel = 'debug' | 'log' | 'info' | 'warn' | 'error';

interface LogOptions {
  context?: string;
  payload?: unknown;
}

const isProd = import.meta.env.PROD;

const formatMessage = (level: LogLevel, message: string, context?: string) => {
  if (!context) {
    return `[${level.toUpperCase()}] ${message}`;
  }

  return `[${level.toUpperCase()}][${context}] ${message}`;
};

const shouldLogLevel = (level: LogLevel) => {
  if (!isProd) {
    return true;
  }

  return level === 'warn' || level === 'error';
};

const createLogger =
  (level: LogLevel) =>
  (message: string, options?: LogOptions): void => {
    if (!shouldLogLevel(level)) {
      return;
    }

    const { context, payload } = options ?? {};
    const formatted = formatMessage(level, message, context);

    if (payload !== undefined) {
      console[level](formatted, payload);

      return;
    }

    console[level](formatted);
  };

export const logDebug = createLogger('debug');
export const log = createLogger('log');
export const logInfo = createLogger('info');
export const logWarn = createLogger('warn');
export const logError = createLogger('error');
