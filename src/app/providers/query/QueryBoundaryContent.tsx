import { type ReactNode } from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import { ErrorBoundary } from '../error-boundary/ErrorBoundary';
import { QueryErrorFallback } from './QueryErrorFallback';

interface QueryBoundaryContentProps {
  children: ReactNode;
}

const createQueryErrorFallback = (reset: () => void, error: Error | null) => {
  return <QueryErrorFallback error={error} onRetry={reset} />;
};

export const QueryBoundaryContent = ({
  children
}: QueryBoundaryContentProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallback={createQueryErrorFallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
};
