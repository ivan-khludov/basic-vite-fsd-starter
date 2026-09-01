import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  clearSessionAccessToken,
  setSessionAccessToken,
  setSessionTokens,
  useSession
} from './session-store';

describe('session-store', () => {
  it('marks the session as expired only when asked', () => {
    setSessionAccessToken('token', 'local');
    clearSessionAccessToken({ reason: 'expired' });

    const { result } = renderHook(() => {
      return useSession();
    });

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.endReason).toBe('expired');
  });

  it('does not mark logout as an expired session', () => {
    setSessionAccessToken('token', 'local');
    clearSessionAccessToken({ reason: 'expired' });
    clearSessionAccessToken();

    const { result } = renderHook(() => {
      return useSession();
    });

    expect(result.current.endReason).toBeNull();
  });

  it('clears the expired reason after a successful sign-in', () => {
    clearSessionAccessToken({ reason: 'expired' });
    setSessionTokens({ accessToken: 'next', refreshToken: 'refresh' }, 'local');

    const { result } = renderHook(() => {
      return useSession();
    });

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.endReason).toBeNull();
  });
});
