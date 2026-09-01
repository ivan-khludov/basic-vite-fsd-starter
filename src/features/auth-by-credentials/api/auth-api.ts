import { z } from 'zod';

import { requestJson } from '@/shared/api';

export interface LoginRequest {
  username: string;
  password: string;
}

/**
 * DummyJSON returns `accessToken` on current versions and `token` on older
 * ones, so the boundary normalizes both into a single shape.
 */
const authTokensSchema = z
  .object({
    accessToken: z.string().min(1).optional(),
    refreshToken: z.string().min(1).optional(),
    token: z.string().min(1).optional()
  })
  .transform((response, context) => {
    const accessToken = response.accessToken ?? response.token;

    if (!accessToken) {
      context.addIssue({
        code: 'custom',
        message: 'Auth response contains no access token'
      });

      return z.NEVER;
    }

    return {
      accessToken,
      refreshToken: response.refreshToken
    };
  });

export type LoginResponse = {
  accessToken: string;
  refreshToken?: string;
};

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const response = await requestJson<unknown>({
    path: '/auth/login',
    method: 'POST',
    body: request,
    isAuthSkipped: true,
    isUnauthorizedSkipped: true
  });

  return authTokensSchema.parse(response);
};

export const refreshSession = async (
  refreshToken: string
): Promise<LoginResponse> => {
  const response = await requestJson<unknown>({
    path: '/auth/refresh',
    method: 'POST',
    body: { refreshToken },
    isAuthSkipped: true,
    isUnauthorizedSkipped: true
  });

  return authTokensSchema.parse(response);
};
