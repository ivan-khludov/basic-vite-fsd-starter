import { refreshSession } from '@/features/auth-by-credentials';
import {
  clearSessionAccessToken,
  getAccessToken,
  getPersistMode,
  getRefreshToken,
  setSessionTokens
} from '@/entities/session';
import { currentUserQueryKey } from '@/entities/user';
import { configureHttpAuth } from '@/shared/api';

import { appQueryClient } from '../providers/query/query-client';

export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    return null;
  }

  try {
    const nextSession = await refreshSession(refreshToken);

    setSessionTokens(
      {
        accessToken: nextSession.accessToken,
        refreshToken: nextSession.refreshToken
      },
      getPersistMode()
    );

    void appQueryClient.invalidateQueries({ queryKey: currentUserQueryKey });

    return nextSession.accessToken;
  } catch {
    return null;
  }
};

export const handleUnauthorized = () => {
  clearSessionAccessToken({ reason: 'expired' });
  appQueryClient.clear();
};

/**
 * Bridges the session entity and the transport layer. A 401 first tries
 * DummyJSON `/auth/refresh`; only a failed refresh drops the session.
 */
export const setupHttpAuth = () => {
  configureHttpAuth({
    getAuthToken: getAccessToken,
    onUnauthorized: handleUnauthorized,
    refreshAccessToken
  });
};
