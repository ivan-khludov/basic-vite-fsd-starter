import type { Page } from '@playwright/test';

import {
  cloneDummyCatalog,
  createDummyCatalogProduct,
  filterDummyCatalogByQuery,
  getDummyCatalogProduct,
  paginateDummyCatalog,
  removeDummyCatalogProduct,
  TEST_PRODUCTS,
  updateDummyCatalogProduct,
  type DummyCatalogProduct,
  type DummyCatalogWritePayload
} from '../../src/shared/testing/dummy-catalog';

export const E2E_CREDENTIALS = {
  username: 'emilys',
  password: 'emilyspass'
} as const;

export const E2E_ACCESS_TOKEN = 'e2e-access-token';
export const E2E_REFRESH_TOKEN = 'e2e-refresh-token';
export const E2E_REFRESHED_ACCESS_TOKEN = 'e2e-refreshed-access-token';

export const E2E_USER = {
  email: 'emily.johnson@x.dummyjson.com',
  firstName: 'Emily',
  id: 1,
  image: 'https://cdn.dummyjson.com/icon/emilys/128',
  lastName: 'Johnson',
  role: 'admin',
  username: 'emilys'
} as const;

export const E2E_PRODUCT = TEST_PRODUCTS[0];
export const E2E_SECOND_PRODUCT = TEST_PRODUCTS[1];

/**
 * The API is stubbed at the network level, so end-to-end runs never depend on
 * the upstream demo backend.
 */
export const mockLoginApi = async (page: Page) => {
  await page.route('https://dummyjson.com/auth/login', async (route) => {
    const payload = route.request().postDataJSON() as {
      username?: string;
      password?: string;
    };

    const isValid =
      payload.username === E2E_CREDENTIALS.username &&
      payload.password === E2E_CREDENTIALS.password;

    if (!isValid) {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Invalid credentials' })
      });

      return;
    }

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        accessToken: E2E_ACCESS_TOKEN,
        refreshToken: E2E_REFRESH_TOKEN
      })
    });
  });
};

const jsonResponse = (body: unknown, status = 200) => {
  return {
    status,
    contentType: 'application/json',
    body: JSON.stringify(body)
  };
};

export const mockRefreshApi = async (
  page: Page,
  options?: { isRejected?: boolean }
) => {
  await page.route('https://dummyjson.com/auth/refresh', async (route) => {
    if (options?.isRejected) {
      await route.fulfill(
        jsonResponse({ message: 'Invalid refresh token' }, 401)
      );

      return;
    }

    const payload = route.request().postDataJSON() as {
      refreshToken?: string;
    };

    if (payload.refreshToken !== E2E_REFRESH_TOKEN) {
      await route.fulfill(
        jsonResponse({ message: 'Invalid refresh token' }, 401)
      );

      return;
    }

    await route.fulfill(
      jsonResponse({
        accessToken: E2E_REFRESHED_ACCESS_TOKEN,
        refreshToken: E2E_REFRESH_TOKEN
      })
    );
  });
};

interface MockCurrentUserApiOptions {
  role?: 'admin' | 'moderator' | 'user';
}

export const mockCurrentUserApi = async (
  page: Page,
  options?: MockCurrentUserApiOptions
) => {
  await page.route('https://dummyjson.com/auth/me**', async (route) => {
    const authorization = route.request().headers()['authorization'];
    const isAuthorized =
      authorization === `Bearer ${E2E_ACCESS_TOKEN}` ||
      authorization === `Bearer ${E2E_REFRESHED_ACCESS_TOKEN}`;

    if (!isAuthorized) {
      await route.fulfill(
        jsonResponse({ message: 'Invalid/Expired Token!' }, 401)
      );

      return;
    }

    await route.fulfill(
      jsonResponse({
        ...E2E_USER,
        role: options?.role ?? E2E_USER.role
      })
    );
  });
};

export const mockProductsApi = async (page: Page) => {
  const products: DummyCatalogProduct[] = cloneDummyCatalog();
  let nextCreatedId = 101;

  // Bind to the DummyJSON host only. A `**/products**` glob also matches Vite
  // chunks such as `widgets/products-catalog` and SPA URLs like `/products/1`.
  await page.route('https://dummyjson.com/products**', async (route) => {
    const request = route.request();
    const method = request.method();
    const url = new URL(request.url());
    const pathParts = url.pathname.split('/').filter(Boolean);
    const lastSegment = pathParts.at(-1);

    if (method === 'POST' && lastSegment === 'add') {
      const payload = request.postDataJSON() as DummyCatalogWritePayload;
      const created = createDummyCatalogProduct(payload, nextCreatedId);
      nextCreatedId += 1;
      products.push(created);
      await route.fulfill(jsonResponse(created));

      return;
    }

    if (method === 'GET' && lastSegment === 'search') {
      const filtered = filterDummyCatalogByQuery(
        products,
        url.searchParams.get('q') ?? ''
      );
      await route.fulfill(
        jsonResponse(paginateDummyCatalog(filtered, url.searchParams))
      );

      return;
    }

    if (lastSegment && lastSegment !== 'products') {
      const productId = Number(lastSegment);
      const current = getDummyCatalogProduct(products, productId);

      if (method === 'GET') {
        if (!current) {
          await route.fulfill(
            jsonResponse({ message: 'Product not found' }, 404)
          );

          return;
        }

        await route.fulfill(jsonResponse(current));

        return;
      }

      if (method === 'PUT') {
        const payload = request.postDataJSON() as DummyCatalogWritePayload;
        const updated = updateDummyCatalogProduct(current, productId, payload);
        const index = products.findIndex((product) => {
          return product.id === productId;
        });

        if (index >= 0) {
          products[index] = updated;
        } else {
          products.push(updated);
        }

        await route.fulfill(jsonResponse(updated));

        return;
      }

      if (method === 'DELETE') {
        if (!current) {
          await route.fulfill(
            jsonResponse({ message: 'Product not found' }, 404)
          );

          return;
        }

        const remaining = removeDummyCatalogProduct(products, productId);
        products.splice(0, products.length, ...remaining);
        await route.fulfill(jsonResponse(current));

        return;
      }
    }

    if (method === 'GET') {
      await route.fulfill(
        jsonResponse(paginateDummyCatalog(products, url.searchParams))
      );

      return;
    }

    await route.fulfill(jsonResponse({ message: 'Not found' }, 404));
  });
};

/** Pins the language so selectors do not depend on the browser locale. */
export const useEnglishLocale = async (page: Page) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('locale', 'en');
  });
};

export const signInViaStorage = async (page: Page) => {
  await page.addInitScript(
    (tokens: { accessToken: string; refreshToken: string }) => {
      window.localStorage.setItem('accessToken', tokens.accessToken);
      window.localStorage.setItem('refreshToken', tokens.refreshToken);
      window.localStorage.setItem('persistMode', 'local');
    },
    {
      accessToken: E2E_ACCESS_TOKEN,
      refreshToken: E2E_REFRESH_TOKEN
    }
  );
};
