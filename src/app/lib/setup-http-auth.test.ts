import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import {
  getAccessToken,
  getRefreshToken,
  setSessionTokens,
  useSession
} from '@/entities/session';
import {
  TEST_REFRESH_TOKEN,
  TEST_REFRESHED_ACCESS_TOKEN
} from '@/shared/testing';

import { appQueryClient } from '../providers/query/query-client';
import { handleUnauthorized, refreshAccessToken } from './setup-http-auth';

describe('handleUnauthorized', () => {
  afterEach(() => {
    appQueryClient.clear();
  });

  it('clears the session, marks it expired, and drops the Query cache', () => {
    setSessionTokens(
      { accessToken: 'token', refreshToken: TEST_REFRESH_TOKEN },
      'local'
    );
    appQueryClient.setQueryData(['private'], { secret: true });

    handleUnauthorized();

    const { result } = renderHook(() => {
      return useSession();
    });

    expect(getAccessToken()).toBeNull();
    expect(getRefreshToken()).toBeNull();
    expect(result.current.endReason).toBe('expired');
    expect(appQueryClient.getQueryData(['private'])).toBeUndefined();
  });
});

describe('refreshAccessToken', () => {
  it('returns null when there is no stored refresh token', async () => {
    await expect(refreshAccessToken()).resolves.toBeNull();
  });

  it('stores the rotated pair and returns the new access token', async () => {
    setSessionTokens(
      { accessToken: 'stale', refreshToken: TEST_REFRESH_TOKEN },
      'local'
    );

    await expect(refreshAccessToken()).resolves.toBe(
      TEST_REFRESHED_ACCESS_TOKEN
    );
    expect(getAccessToken()).toBe(TEST_REFRESHED_ACCESS_TOKEN);
    expect(getRefreshToken()).toBe(TEST_REFRESH_TOKEN);
  });

  it('returns null when DummyJSON rejects the refresh token', async () => {
    setSessionTokens(
      { accessToken: 'stale', refreshToken: 'wrong-refresh' },
      'local'
    );

    await expect(refreshAccessToken()).resolves.toBeNull();
    expect(getAccessToken()).toBe('stale');
  });
});
