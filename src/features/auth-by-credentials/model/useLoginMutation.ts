import { useMutation } from '@tanstack/react-query';

import { setSessionTokens, type PersistMode } from '@/entities/session';
import { type ApiError } from '@/shared/api';

import { login, type LoginRequest, type LoginResponse } from '../api/auth-api';

interface LoginMutationVariables {
  persistMode: PersistMode;
  request: LoginRequest;
}

export const useLoginMutation = () => {
  return useMutation<LoginResponse, ApiError, LoginMutationVariables>({
    mutationFn: async ({ request }: LoginMutationVariables) => {
      return await login(request);
    },
    onSuccess: (data, variables) => {
      setSessionTokens(
        {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken
        },
        variables.persistMode
      );
    }
  });
};
