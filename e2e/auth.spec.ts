import { expect, test } from '@playwright/test';

import {
  E2E_CREDENTIALS,
  mockCurrentUserApi,
  mockLoginApi,
  mockProductsApi,
  mockRefreshApi,
  signInViaStorage,
  useEnglishLocale
} from './helpers/app';

test.beforeEach(async ({ page }) => {
  await useEnglishLocale(page);
  await mockLoginApi(page);
  await mockCurrentUserApi(page);
  await mockProductsApi(page);
});

test('redirects a guest from a protected route to the login page', async ({
  page
}) => {
  await page.goto('/');

  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByRole('contentinfo')).toHaveCount(0);
});

test('signs in and lands on the protected page', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Username').fill(E2E_CREDENTIALS.username);
  await page.getByLabel('Password').fill(E2E_CREDENTIALS.password);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { name: 'Catalog' })).toBeVisible();
  await expect(page.getByText('Emily Johnson')).toBeVisible();
});

test('reports invalid credentials and stays on the login page', async ({
  page
}) => {
  await page.goto('/login');

  await page.getByLabel('Username').fill(E2E_CREDENTIALS.username);
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByText('Invalid username or password')).toBeVisible();
  await expect(page).toHaveURL(/\/login$/);
});

test('shows not-found for an unknown route', async ({ page }) => {
  await signInViaStorage(page);
  await page.goto('/this-page-does-not-exist');

  await expect(
    page.getByRole('heading', { name: 'Page not found' })
  ).toBeVisible();
});

test('refreshes an expired access token and stays on the catalog', async ({
  page
}) => {
  await mockRefreshApi(page);

  let hasRejectedListOnce = false;

  await page.route('https://dummyjson.com/products**', async (route) => {
    const url = new URL(route.request().url());
    const isListGet =
      route.request().method() === 'GET' && url.pathname === '/products';

    if (isListGet && !hasRejectedListOnce) {
      hasRejectedListOnce = true;
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Token expired' })
      });

      return;
    }

    await route.fallback();
  });

  await signInViaStorage(page);
  await page.goto('/');

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { name: 'Catalog' })).toBeVisible();
  await expect(page.getByText('Essence Mascara')).toBeVisible();
});

test('shows session expired when refresh fails', async ({ page }) => {
  await mockRefreshApi(page, { isRejected: true });

  await page.route('https://dummyjson.com/products**', async (route) => {
    await route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Token expired' })
    });
  });

  await signInViaStorage(page);
  await page.goto('/');

  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole('alert')).toContainText('Session expired');
});
