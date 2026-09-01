import { expect, test } from '@playwright/test';

import {
  E2E_PRODUCT,
  E2E_SECOND_PRODUCT,
  E2E_USER,
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
});

test('shows products in the catalog and opens details', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Catalog' })).toBeVisible();
  await expect(page.getByText(E2E_PRODUCT.title)).toBeVisible();
  await expect(page.getByText(E2E_SECOND_PRODUCT.title)).toBeVisible();

  await page.getByRole('link', { name: E2E_PRODUCT.title }).click();

  await expect(page).toHaveURL(/\/products\/1$/);
  await expect(
    page.getByRole('heading', { name: E2E_PRODUCT.title })
  ).toBeVisible();
});

test('filters the catalog by search query', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(E2E_SECOND_PRODUCT.title)).toBeVisible();

  await page.getByLabel('Search').fill('Essence');

  await expect(page).toHaveURL(/q=Essence/);
  await expect(page.getByText(E2E_PRODUCT.title)).toBeVisible();
  await expect(page.getByText(E2E_SECOND_PRODUCT.title)).toHaveCount(0);

  await page.getByLabel('Search').fill('zzzz-no-match');

  await expect(page).toHaveURL(/q=zzzz-no-match/);
  await expect(page.getByText('No products found')).toBeVisible();
});

test('sorts products by price descending', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Sort').click();
  await page.getByRole('option', { name: 'Price: high to low' }).click();

  await expect(page).toHaveURL(/sortBy=price/);
  await expect(page).toHaveURL(/order=desc/);

  const productLinks = page.getByRole('link', {
    name: new RegExp(`${E2E_PRODUCT.title}|${E2E_SECOND_PRODUCT.title}`)
  });

  await expect(productLinks.nth(0)).toContainText(E2E_SECOND_PRODUCT.title);
  await expect(productLinks.nth(1)).toContainText(E2E_PRODUCT.title);
});

test('paginates the catalog', async ({ page }) => {
  await page.goto('/?limit=1');

  await expect(page.getByText(E2E_PRODUCT.title)).toBeVisible();
  await expect(page.getByText(E2E_SECOND_PRODUCT.title)).toHaveCount(0);

  await page.evaluate(() => {
    Reflect.set(window, '__spaAlive', true);
  });

  await page.getByRole('link', { name: 'Next' }).click();

  await expect(page).toHaveURL(/skip=1/);
  await expect(page.getByText(E2E_SECOND_PRODUCT.title)).toBeVisible();
  await expect(page.getByText(E2E_PRODUCT.title)).toHaveCount(0);
  expect(await page.evaluate(() => Reflect.get(window, '__spaAlive'))).toBe(
    true
  );

  await page.getByRole('link', { name: 'Previous' }).click();

  await expect(page).toHaveURL(/limit=1/);
  await expect(page.getByText(E2E_PRODUCT.title)).toBeVisible();
  expect(await page.evaluate(() => Reflect.get(window, '__spaAlive'))).toBe(
    true
  );
});

test('creates a product and keeps it in the catalog cache', async ({
  page
}) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Add product' }).click();

  const dialog = page.getByRole('dialog', { name: 'New product' });
  await dialog.getByLabel('Title').fill('E2E Serum');
  await dialog.getByLabel('Price').fill('12.5');
  await dialog.getByRole('button', { name: 'Add product' }).click();

  await expect(page.getByText('Product created')).toBeVisible();
  await expect(page.getByText('E2E Serum')).toBeVisible();
});

test('updates a product title', async ({ page }) => {
  await page.goto('/products/1');

  await expect(
    page.getByRole('heading', { name: E2E_PRODUCT.title })
  ).toBeVisible();

  await page.getByLabel('Title').fill('Updated Mascara');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Product saved')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Updated Mascara' })
  ).toBeVisible();
});

test('deletes a product and returns to the catalog', async ({ page }) => {
  await page.goto('/products/1');

  await page.getByRole('button', { name: 'Delete' }).click();

  const dialog = page.getByRole('dialog', { name: 'Delete this product?' });
  await dialog.getByRole('button', { name: 'Delete' }).click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByText('Product deleted')).toBeVisible();
  await expect(page.getByText(E2E_PRODUCT.title)).toHaveCount(0);
  await expect(page.getByText(E2E_SECOND_PRODUCT.title)).toBeVisible();
});

test('shows not-found for an unknown product', async ({ page }) => {
  await page.goto('/products/999');

  await expect(
    page.getByRole('heading', { name: 'Page not found' })
  ).toBeVisible();
});

test('hides catalog write actions for a viewer', async ({ page }) => {
  await mockCurrentUserApi(page, { role: 'user' });

  await page.goto('/');

  await expect(
    page.getByText(`${E2E_USER.firstName} ${E2E_USER.lastName}`)
  ).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add product' })).toHaveCount(
    0
  );

  await page.goto('/products/1');

  await expect(
    page.getByRole('heading', { name: E2E_PRODUCT.title })
  ).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(0);
});
