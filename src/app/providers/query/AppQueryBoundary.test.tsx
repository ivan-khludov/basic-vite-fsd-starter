import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, it, vi } from 'vitest';

import { ApiError } from '@/shared/api';
import { i18n } from '@/shared/i18n';

import { AppQueryBoundary } from './AppQueryBoundary';

interface ProbeQueryProps {
  queryFn: () => Promise<{ ok: true }>;
}

const ProbeQuery = ({ queryFn }: ProbeQueryProps) => {
  const { data } = useQuery({
    queryFn,
    queryKey: ['app-query-boundary']
  });

  if (!data) {
    return null;
  }

  return <p>loaded</p>;
};

const renderBoundary = (queryFn: ProbeQueryProps['queryFn']) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        throwOnError: true,
        gcTime: 0
      }
    }
  });

  return render(
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <AppQueryBoundary>
          <ProbeQuery queryFn={queryFn} />
        </AppQueryBoundary>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

describe('AppQueryBoundary', () => {
  it('shows retry and recovers after a failed query', async () => {
    const queryFn = vi
      .fn<() => Promise<{ ok: true }>>()
      .mockRejectedValueOnce(new Error('boom'))
      .mockResolvedValueOnce({ ok: true });

    const user = userEvent.setup();

    renderBoundary(queryFn);

    expect(
      await screen.findByRole('button', { name: i18n.t('common.retry') })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: i18n.t('common.retry') })
    );

    expect(await screen.findByText('loaded')).toBeInTheDocument();
    expect(queryFn).toHaveBeenCalledTimes(2);
  });

  it('shows the network copy for ApiError with status 0', async () => {
    renderBoundary(() => {
      return Promise.reject(new ApiError('Request timed out', 0));
    });

    expect(
      await screen.findByRole('heading', {
        name: i18n.t('errors.networkTitle')
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: i18n.t('common.retry') })
    ).toBeInTheDocument();
  });

  it('shows the server copy for a 500 ApiError', async () => {
    renderBoundary(() => {
      return Promise.reject(new ApiError('Broken', 500));
    });

    expect(
      await screen.findByRole('heading', { name: i18n.t('errors.title') })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: i18n.t('common.retry') })
    ).toBeInTheDocument();
  });

  it('shows the expired session copy without retry on 401', async () => {
    renderBoundary(() => {
      return Promise.reject(new ApiError('Token expired', 401));
    });

    expect(
      await screen.findByRole('heading', {
        name: i18n.t('auth.sessionExpiredTitle')
      })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: i18n.t('common.retry') })
    ).not.toBeInTheDocument();
  });
});
