import { type ReactNode } from 'react';

import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { QueryBoundaryContent } from './QueryBoundaryContent';

interface AppQueryBoundaryProps {
  children: ReactNode;
}

export const AppQueryBoundary = ({ children }: AppQueryBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      <QueryBoundaryContent>{children}</QueryBoundaryContent>
    </QueryErrorResetBoundary>
  );
};
