import { expect, test } from '@playwright/test';

import {
  mockCurrentUserApi,
  mockProductsApi,
  signInViaStorage,
  useEnglishLocale
} from './helpers/app';

test.beforeEach(async ({ page }) => {
  await useEnglishLocale(page);
  await mockCurrentUserApi(page);
  await mockProductsApi(page);
  await signInViaStorage(page);
  await page.goto('/');
});

test('shows the current user in the header', async ({ page }) => {
  await expect(page.getByText('Emily Johnson')).toBeVisible();
});

test('opens the support dialog from the footer', async ({ page }) => {
  await expect(page.getByRole('contentinfo')).toBeVisible();

  await page.getByRole('button', { name: 'Support' }).click();

  await expect(
    page.getByText('TNrPGfU3HqtfMPmmhdvrJsQng7Ck9fian4')
  ).toBeVisible();
});

test('toggles the color theme', async ({ page }) => {
  const html = page.locator('html');

  await expect(html).not.toHaveClass(/dark/);

  await page.getByRole('button', { name: 'Toggle theme' }).click();

  await expect(html).toHaveClass(/dark/);
});

test('collapses and restores the sidebar', async ({ page }) => {
  const navigation = page.getByRole('navigation');

  await expect(navigation).toBeVisible();

  await page.getByRole('button', { name: 'Collapse menu' }).click();
  await expect(navigation).toBeHidden();

  await page.reload();
  await expect(navigation).toBeHidden();

  await page.getByRole('button', { name: 'Collapse menu' }).click();
  await expect(navigation).toBeVisible();
});

test('switches the interface language', async ({ page }) => {
  const html = page.locator('html');

  await expect(html).toHaveAttribute('lang', 'en');
  await expect(page).toHaveTitle(/Catalog/);
  await expect(page.getByRole('heading', { name: 'Catalog' })).toBeVisible();

  await page.getByRole('button', { name: 'Change language' }).click();

  await expect(html).toHaveAttribute('lang', 'ru');
  await expect(page).toHaveTitle(/Каталог/);
  await expect(page.getByRole('heading', { name: 'Каталог' })).toBeVisible();
});
