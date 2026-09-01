import { describe, expect, it } from 'vitest';

import { APP_CONFIG } from '@/shared/config';

import {
  clearSession,
  getAccessToken,
  getPersistMode,
  getRefreshToken,
  setAccessToken,
  setTokens
} from './session-storage';

const { accessTokenKey, persistModeKey, refreshTokenKey } = APP_CONFIG.storage;

describe('session-storage', () => {
  it('keeps the token in localStorage in local mode', () => {
    setAccessToken('token-local', 'local');

    expect(window.localStorage.getItem(accessTokenKey)).toBe('token-local');
    expect(window.localStorage.getItem(persistModeKey)).toBe('local');
    expect(window.sessionStorage.getItem(accessTokenKey)).toBeNull();
    expect(getAccessToken()).toBe('token-local');
    expect(getPersistMode()).toBe('local');
  });

  it('keeps the token in sessionStorage in session mode', () => {
    setAccessToken('token-session', 'session');

    expect(window.sessionStorage.getItem(accessTokenKey)).toBe('token-session');
    expect(window.localStorage.getItem(accessTokenKey)).toBeNull();
    expect(getAccessToken()).toBe('token-session');
    expect(getPersistMode()).toBe('session');
  });

  it('stores the refresh token next to the access token', () => {
    setTokens({ accessToken: 'access', refreshToken: 'refresh' }, 'local');

    expect(window.localStorage.getItem(refreshTokenKey)).toBe('refresh');
    expect(getRefreshToken()).toBe('refresh');
  });

  it('does not leave tokens in the other storage when the mode changes', () => {
    setTokens(
      { accessToken: 'token-local', refreshToken: 'refresh-local' },
      'local'
    );
    setTokens(
      { accessToken: 'token-session', refreshToken: 'refresh-session' },
      'session'
    );

    expect(window.localStorage.getItem(accessTokenKey)).toBeNull();
    expect(window.localStorage.getItem(refreshTokenKey)).toBeNull();
    expect(getAccessToken()).toBe('token-session');
    expect(getRefreshToken()).toBe('refresh-session');
  });

  it('clears both storages on logout', () => {
    setTokens(
      { accessToken: 'token-local', refreshToken: 'refresh-local' },
      'local'
    );
    clearSession();

    expect(getAccessToken()).toBeNull();
    expect(getRefreshToken()).toBeNull();
    expect(window.localStorage.getItem(persistModeKey)).toBeNull();
    expect(window.sessionStorage.getItem(persistModeKey)).toBeNull();
  });

  it('returns null when nothing is stored', () => {
    expect(getAccessToken()).toBeNull();
    expect(getRefreshToken()).toBeNull();
  });
});
