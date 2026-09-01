import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { getAccessToken, getRefreshToken } from '@/entities/session';
import { APP_CONFIG } from '@/shared/config';
import { i18n } from '@/shared/i18n';
import {
  renderWithProviders,
  TEST_ACCESS_TOKEN,
  TEST_CREDENTIALS,
  TEST_REFRESH_TOKEN
} from '@/shared/testing';

import { LoginForm } from './LoginForm';

const fillCredentials = async (
  user: ReturnType<typeof userEvent.setup>,
  password: string
) => {
  await user.type(
    screen.getByLabelText(i18n.t('auth.username')),
    TEST_CREDENTIALS.username
  );
  await user.type(screen.getByLabelText(i18n.t('auth.password')), password);
};

const submitForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole('button', { name: i18n.t('auth.submit') }));
};

describe('LoginForm', () => {
  it('shows validation errors instead of calling the API', async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();

    renderWithProviders(<LoginForm onSuccess={handleSuccess} />);

    await submitForm(user);

    expect(
      await screen.findByText(i18n.t('auth.validation.usernameRequired'))
    ).toBeInTheDocument();
    expect(handleSuccess).not.toHaveBeenCalled();
  });

  it('stores the token in localStorage when "remember me" is checked', async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();

    renderWithProviders(<LoginForm onSuccess={handleSuccess} />);

    await fillCredentials(user, TEST_CREDENTIALS.password);
    await submitForm(user);

    await waitFor(() => {
      expect(handleSuccess).toHaveBeenCalledOnce();
    });

    expect(getAccessToken()).toBe(TEST_ACCESS_TOKEN);
    expect(getRefreshToken()).toBe(TEST_REFRESH_TOKEN);
    expect(window.localStorage.getItem(APP_CONFIG.storage.accessTokenKey)).toBe(
      TEST_ACCESS_TOKEN
    );
    expect(
      window.localStorage.getItem(APP_CONFIG.storage.refreshTokenKey)
    ).toBe(TEST_REFRESH_TOKEN);
  });

  it('stores the token in sessionStorage when "remember me" is unchecked', async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();

    renderWithProviders(<LoginForm onSuccess={handleSuccess} />);

    await user.click(screen.getByRole('checkbox'));
    await fillCredentials(user, TEST_CREDENTIALS.password);
    await submitForm(user);

    await waitFor(() => {
      expect(handleSuccess).toHaveBeenCalledOnce();
    });

    expect(
      window.sessionStorage.getItem(APP_CONFIG.storage.accessTokenKey)
    ).toBe(TEST_ACCESS_TOKEN);
    expect(
      window.localStorage.getItem(APP_CONFIG.storage.accessTokenKey)
    ).toBeNull();
  });

  it('reports a server rejection without leaving a session behind', async () => {
    const user = userEvent.setup();
    const handleSuccess = vi.fn();

    renderWithProviders(<LoginForm onSuccess={handleSuccess} />);

    await fillCredentials(user, 'wrong-password');
    await submitForm(user);

    expect(
      await screen.findByText(i18n.t('auth.errors.invalidCredentials'))
    ).toBeInTheDocument();
    expect(handleSuccess).not.toHaveBeenCalled();
    expect(getAccessToken()).toBeNull();
  });
});
