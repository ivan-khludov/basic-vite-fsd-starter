import { QueryClient } from '@tanstack/react-query';

export const createAppQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 30_000,
        throwOnError: true
      }
    }
  });
};

export const appQueryClient = createAppQueryClient();
