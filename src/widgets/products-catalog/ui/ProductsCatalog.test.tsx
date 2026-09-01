import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { afterEach, describe, expect, it } from 'vitest';

import { getAccessToken, setSessionAccessToken } from '@/entities/session';
import { currentUserQueryKey } from '@/entities/user';
import { configureHttpAuth } from '@/shared/api';
import { i18n } from '@/shared/i18n';
import {
  apiUrl,
  renderWithProviders,
  server,
  TEST_ACCESS_TOKEN,
  TEST_PRODUCTS,
  TEST_USER
} from '@/shared/testing';

import { ProductsCatalog } from './ProductsCatalog';

afterEach(() => {
  configureHttpAuth({
    getAuthToken: () => null,
    onUnauthorized: () => undefined
  });
});

const signInAsTestUser = () => {
  configureHttpAuth({
    getAuthToken: getAccessToken,
    onUnauthorized: () => undefined
  });
  setSessionAccessToken(TEST_ACCESS_TOKEN, 'local');
};

describe('ProductsCatalog', () => {
  it('renders products from the catalog API', async () => {
    renderWithProviders(<ProductsCatalog />);

    expect(await screen.findByText(TEST_PRODUCTS[0].title)).toBeInTheDocument();
    expect(screen.getByText(TEST_PRODUCTS[1].title)).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: i18n.t('products.add') })
    ).not.toBeInTheDocument();
  });

  it('opens the create dialog from the catalog toolbar', async () => {
    const user = userEvent.setup();

    signInAsTestUser();
    renderWithProviders(<ProductsCatalog />);

    await user.click(
      await screen.findByRole('button', { name: i18n.t('products.add') })
    );

    expect(
      await screen.findByRole('dialog', {
        name: i18n.t('products.createTitle')
      })
    ).toBeInTheDocument();
  });

  it('hides the create action for a viewer', async () => {
    signInAsTestUser();
    server.use(
      http.get(apiUrl('/auth/me'), () => {
        return HttpResponse.json({
          ...TEST_USER,
          role: 'user'
        });
      })
    );

    const { queryClient } = renderWithProviders(<ProductsCatalog />);

    expect(await screen.findByText(TEST_PRODUCTS[0].title)).toBeInTheDocument();

    await waitFor(() => {
      expect(queryClient.getQueryState(currentUserQueryKey)?.status).toBe(
        'success'
      );
    });

    expect(
      screen.queryByRole('button', { name: i18n.t('products.add') })
    ).not.toBeInTheDocument();
  });

  it('appends a created product to the list without refetching', async () => {
    const user = userEvent.setup();

    signInAsTestUser();
    renderWithProviders(<ProductsCatalog />);

    await user.click(
      await screen.findByRole('button', { name: i18n.t('products.add') })
    );

    const dialog = await screen.findByRole('dialog', {
      name: i18n.t('products.createTitle')
    });

    await user.type(
      within(dialog).getByLabelText(i18n.t('products.title')),
      'New Candle'
    );
    await user.type(
      within(dialog).getByLabelText(i18n.t('products.priceLabel')),
      '12'
    );
    await user.click(
      within(dialog).getByRole('button', { name: i18n.t('products.add') })
    );

    await waitFor(() => {
      expect(screen.getByText('New Candle')).toBeInTheDocument();
    });
  });
});
