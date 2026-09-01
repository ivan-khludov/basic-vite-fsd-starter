import { type ReactNode } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { APP_CONFIG } from '@/shared/config';

import { appQueryClient } from './query-client';

interface QueryProviderProps {
  children: ReactNode;
}

const shouldShowDevtools =
  APP_CONFIG.appEnv !== 'production' && import.meta.env.MODE !== 'test';

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const devtools = shouldShowDevtools ? (
    <ReactQueryDevtools initialIsOpen={false} />
  ) : null;

  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
      {devtools}
    </QueryClientProvider>
  );
};
