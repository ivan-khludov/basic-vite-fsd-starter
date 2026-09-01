import { useQuery } from '@tanstack/react-query';

import { type ApiError } from '@/shared/api';

import { fetchCurrentUser } from '../api/users-api';
import { type User } from './types';

export const currentUserQueryKey = ['current-user'] as const;

interface UseCurrentUserQueryOptions {
  isEnabled: boolean;
}

export const useCurrentUserQuery = ({
  isEnabled
}: UseCurrentUserQueryOptions) => {
  return useQuery<User, ApiError>({
    enabled: isEnabled,
    queryFn: async ({ signal }) => {
      return await fetchCurrentUser(signal);
    },
    queryKey: currentUserQueryKey,
    throwOnError: false
  });
};
