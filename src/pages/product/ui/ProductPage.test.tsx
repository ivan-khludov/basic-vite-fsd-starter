import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { Route, Routes } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';

import { getAccessToken, setSessionAccessToken } from '@/entities/session';
import { currentUserQueryKey } from '@/entities/user';
import { configureHttpAuth } from '@/shared/api';
import { ROUTES_CONFIG } from '@/shared/config';
import { i18n } from '@/shared/i18n';
import {
  apiUrl,
  renderWithProviders,
  server,
  TEST_ACCESS_TOKEN,
  TEST_PRODUCTS,
  TEST_USER
} from '@/shared/testing';

import { ProductPage } from './ProductPage';

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

const renderProductRoute = (path: string) => {
  return renderWithProviders(
    <Routes>
      <Route path={ROUTES_CONFIG.HOME.href} element={<p>catalog-home</p>} />
      <Route path={ROUTES_CONFIG.PRODUCT.href} element={<ProductPage />} />
    </Routes>,
    { route: path }
  );
};

describe('ProductPage', () => {
  it('shows not-found for a non-numeric product id', async () => {
    renderProductRoute('/products/abc');

    expect(
      await screen.findByRole('heading', {
        name: i18n.t('errors.notFoundTitle')
      })
    ).toBeInTheDocument();
  });

  it('shows not-found when the product API returns 404', async () => {
    renderProductRoute('/products/999');

    expect(
      await screen.findByRole('heading', {
        name: i18n.t('errors.notFoundTitle')
      })
    ).toBeInTheDocument();
  });

  it('renders a product and leaves the catalog after delete', async () => {
    const user = userEvent.setup();

    signInAsTestUser();
    renderProductRoute(`/products/${TEST_PRODUCTS[0].id}`);

    expect(
      await screen.findByRole('heading', { name: TEST_PRODUCTS[0].title })
    ).toBeInTheDocument();

    await user.click(
      await screen.findByRole('button', { name: i18n.t('products.delete') })
    );

    const dialog = await screen.findByRole('dialog', {
      name: i18n.t('products.deleteTitle')
    });

    await user.click(
      within(dialog).getByRole('button', {
        name: i18n.t('products.deleteConfirm')
      })
    );

    await waitFor(() => {
      expect(screen.getByText('catalog-home')).toBeInTheDocument();
    });
  });

  it('hides write actions for a viewer', async () => {
    signInAsTestUser();
    server.use(
      http.get(apiUrl('/auth/me'), () => {
        return HttpResponse.json({
          ...TEST_USER,
          role: 'user'
        });
      })
    );

    const { queryClient } = renderProductRoute(
      `/products/${TEST_PRODUCTS[0].id}`
    );

    expect(
      await screen.findByRole('heading', { name: TEST_PRODUCTS[0].title })
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(queryClient.getQueryState(currentUserQueryKey)?.status).toBe(
        'success'
      );
    });

    expect(
      screen.queryByRole('button', { name: i18n.t('products.save') })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: i18n.t('products.delete') })
    ).not.toBeInTheDocument();
  });
});
