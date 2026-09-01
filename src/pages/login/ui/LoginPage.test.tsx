import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { clearSessionAccessToken } from '@/entities/session';
import { i18n } from '@/shared/i18n';
import { renderWithProviders } from '@/shared/testing';

import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('does not show the expired alert for a guest', () => {
    renderWithProviders(<LoginPage />, { route: '/login' });

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: i18n.t('auth.submit') })
    ).toBeInTheDocument();
  });

  it('shows the expired session alert when the session ended with expired', () => {
    clearSessionAccessToken({ reason: 'expired' });

    renderWithProviders(<LoginPage />, { route: '/login' });

    expect(screen.getByRole('alert')).toHaveTextContent(
      i18n.t('auth.sessionExpiredTitle')
    );
    expect(screen.getByRole('alert')).toHaveTextContent(
      i18n.t('auth.sessionExpiredDescription')
    );
  });
});
