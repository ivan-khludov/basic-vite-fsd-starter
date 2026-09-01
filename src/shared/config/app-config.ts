import { env } from './env';

const stripTrailingSlashes = (url: string): string => {
  return url.replace(/\/+$/, '');
};

export const APP_CONFIG = {
  appEnv: env.VITE_APP_ENV,
  api: {
    baseUrl: stripTrailingSlashes(env.VITE_API_BASE_URL),
    requestTimeoutMs: 15_000
  },
  storage: {
    accessTokenKey: 'accessToken',
    refreshTokenKey: 'refreshToken',
    persistModeKey: 'persistMode',
    localeKey: 'locale',
    uiStateKey: 'ui-state'
  },
  products: {
    defaultLimit: 20,
    defaultSkip: 0
  }
} as const;
