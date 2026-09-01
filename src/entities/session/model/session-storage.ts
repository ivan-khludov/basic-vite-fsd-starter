import { APP_CONFIG } from '@/shared/config';
import { logError } from '@/shared/utils';

type PersistMode = 'local' | 'session';

export interface SessionTokens {
  accessToken: string;
  refreshToken?: string;
}

const ACCESS_TOKEN_KEY = APP_CONFIG.storage.accessTokenKey;
const REFRESH_TOKEN_KEY = APP_CONFIG.storage.refreshTokenKey;
const PERSIST_MODE_KEY = APP_CONFIG.storage.persistModeKey;

const safeGetItem = (storage: Storage, key: string): string | null => {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetItem = (storage: Storage, key: string, value: string) => {
  try {
    storage.setItem(key, value);
  } catch (error) {
    logError('Failed to set item in storage', {
      context: 'session-storage',
      payload: { key, error }
    });
  }
};

const safeRemoveItem = (storage: Storage, key: string) => {
  try {
    storage.removeItem(key);
  } catch (error) {
    logError('Failed to remove item from storage', {
      context: 'session-storage',
      payload: { key, error }
    });
  }
};

export const getPersistMode = (): PersistMode => {
  if (typeof window === 'undefined') {
    return 'session';
  }

  const fromLocal = safeGetItem(window.localStorage, PERSIST_MODE_KEY);
  const fromSession = safeGetItem(window.sessionStorage, PERSIST_MODE_KEY);
  const value = fromLocal ?? fromSession;

  return value === 'local' ? 'local' : 'session';
};

const readStoredValue = (key: string): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const mode = getPersistMode();
  const preferred =
    mode === 'local' ? window.localStorage : window.sessionStorage;
  const fromPreferred = safeGetItem(preferred, key);

  if (fromPreferred) {
    return fromPreferred;
  }

  const fallback =
    mode === 'local' ? window.sessionStorage : window.localStorage;

  return safeGetItem(fallback, key);
};

export const getAccessToken = (): string | null => {
  return readStoredValue(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  return readStoredValue(REFRESH_TOKEN_KEY);
};

export const setTokens = (tokens: SessionTokens, persistMode: PersistMode) => {
  if (typeof window === 'undefined') {
    return;
  }

  const storage =
    persistMode === 'local' ? window.localStorage : window.sessionStorage;
  const otherStorage =
    persistMode === 'local' ? window.sessionStorage : window.localStorage;

  safeSetItem(storage, ACCESS_TOKEN_KEY, tokens.accessToken);
  safeSetItem(storage, PERSIST_MODE_KEY, persistMode);

  if (tokens.refreshToken) {
    safeSetItem(storage, REFRESH_TOKEN_KEY, tokens.refreshToken);
  } else {
    safeRemoveItem(storage, REFRESH_TOKEN_KEY);
  }

  safeRemoveItem(otherStorage, ACCESS_TOKEN_KEY);
  safeRemoveItem(otherStorage, REFRESH_TOKEN_KEY);
  safeRemoveItem(otherStorage, PERSIST_MODE_KEY);
};

export const setAccessToken = (token: string, persistMode: PersistMode) => {
  setTokens({ accessToken: token }, persistMode);
};

export const clearSession = () => {
  if (typeof window === 'undefined') {
    return;
  }

  safeRemoveItem(window.localStorage, ACCESS_TOKEN_KEY);
  safeRemoveItem(window.localStorage, REFRESH_TOKEN_KEY);
  safeRemoveItem(window.localStorage, PERSIST_MODE_KEY);
  safeRemoveItem(window.sessionStorage, ACCESS_TOKEN_KEY);
  safeRemoveItem(window.sessionStorage, REFRESH_TOKEN_KEY);
  safeRemoveItem(window.sessionStorage, PERSIST_MODE_KEY);
};

export type { PersistMode };
