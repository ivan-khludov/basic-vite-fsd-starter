import { screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { getAccessToken, setSessionAccessToken } from '@/entities/session';
import { configureHttpAuth } from '@/shared/api';
import {
  renderWithProviders,
  TEST_ACCESS_TOKEN,
  TEST_USER
} from '@/shared/testing';

import { Header } from './Header';

afterEach(() => {
  configureHttpAuth({
    getAuthToken: () => null,
    onUnauthorized: () => undefined
  });
});

describe('Header', () => {
  it('does not show a user name for a guest', () => {
    renderWithProviders(<Header />);

    expect(
      screen.queryByText(`${TEST_USER.firstName} ${TEST_USER.lastName}`)
    ).not.toBeInTheDocument();
  });

  it('shows the current user name after sign-in', async () => {
    configureHttpAuth({
      getAuthToken: getAccessToken,
      onUnauthorized: () => undefined
    });
    setSessionAccessToken(TEST_ACCESS_TOKEN, 'local');

    renderWithProviders(<Header />);

    expect(
      await screen.findByText(`${TEST_USER.firstName} ${TEST_USER.lastName}`)
    ).toBeInTheDocument();
  });
});
