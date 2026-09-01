import { http, HttpResponse } from 'msw';

import { APP_CONFIG } from '@/shared/config';

import {
  createDummyCatalogProduct,
  filterDummyCatalogByQuery,
  getDummyCatalogProduct,
  paginateDummyCatalog,
  TEST_PRODUCTS,
  updateDummyCatalogProduct,
  type DummyCatalogWritePayload
} from '../dummy-catalog';

export const TEST_CREDENTIALS = {
  username: 'emilys',
  password: 'emilyspass'
} as const;

export const TEST_ACCESS_TOKEN = 'test-access-token';
export const TEST_REFRESH_TOKEN = 'test-refresh-token';
export const TEST_REFRESHED_ACCESS_TOKEN = 'test-refreshed-access-token';

export const TEST_USER = {
  email: 'emily.johnson@x.dummyjson.com',
  firstName: 'Emily',
  id: 1,
  image: 'https://cdn.dummyjson.com/icon/emilys/128',
  lastName: 'Johnson',
  role: 'admin',
  username: 'emilys'
} as const;

export { TEST_PRODUCTS };

export const apiUrl = (path: string): string => {
  return `${APP_CONFIG.api.baseUrl}${path}`;
};

interface LoginBody {
  username?: string;
  password?: string;
}

export const handlers = [
  http.post(apiUrl('/auth/login'), async ({ request }) => {
    const body = (await request.json()) as LoginBody;

    const isValid =
      body.username === TEST_CREDENTIALS.username &&
      body.password === TEST_CREDENTIALS.password;

    if (!isValid) {
      return HttpResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      accessToken: TEST_ACCESS_TOKEN,
      refreshToken: TEST_REFRESH_TOKEN
    });
  }),

  http.post(apiUrl('/auth/refresh'), async ({ request }) => {
    const body = (await request.json()) as { refreshToken?: string };

    if (body.refreshToken !== TEST_REFRESH_TOKEN) {
      return HttpResponse.json(
        { message: 'Invalid refresh token' },
        { status: 401 }
      );
    }

    return HttpResponse.json({
      accessToken: TEST_REFRESHED_ACCESS_TOKEN,
      refreshToken: TEST_REFRESH_TOKEN
    });
  }),

  http.get(apiUrl('/auth/me'), ({ request }) => {
    const authorization = request.headers.get('authorization');
    const isAuthorized =
      authorization === `Bearer ${TEST_ACCESS_TOKEN}` ||
      authorization === `Bearer ${TEST_REFRESHED_ACCESS_TOKEN}`;

    if (!isAuthorized) {
      return HttpResponse.json(
        { message: 'Invalid/Expired Token!' },
        { status: 401 }
      );
    }

    return HttpResponse.json(TEST_USER);
  }),

  http.get(apiUrl('/products/search'), ({ request }) => {
    const url = new URL(request.url);
    const products = filterDummyCatalogByQuery(
      [...TEST_PRODUCTS],
      url.searchParams.get('q') ?? ''
    );

    return HttpResponse.json(paginateDummyCatalog(products, url.searchParams));
  }),

  http.get(apiUrl('/products/:id'), ({ params }) => {
    const productId = Number(params.id);
    const product = getDummyCatalogProduct([...TEST_PRODUCTS], productId);

    if (!product) {
      return HttpResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(product);
  }),

  http.get(apiUrl('/products'), ({ request }) => {
    const url = new URL(request.url);

    return HttpResponse.json(
      paginateDummyCatalog([...TEST_PRODUCTS], url.searchParams)
    );
  }),

  http.post(apiUrl('/products/add'), async ({ request }) => {
    const body = (await request.json()) as DummyCatalogWritePayload;

    return HttpResponse.json(createDummyCatalogProduct(body));
  }),

  http.put(apiUrl('/products/:id'), async ({ params, request }) => {
    const productId = Number(params.id);
    const body = (await request.json()) as DummyCatalogWritePayload;
    const current = getDummyCatalogProduct([...TEST_PRODUCTS], productId);

    return HttpResponse.json(
      updateDummyCatalogProduct(current, productId, body)
    );
  }),

  http.delete(apiUrl('/products/:id'), ({ params }) => {
    const productId = Number(params.id);
    const product = getDummyCatalogProduct([...TEST_PRODUCTS], productId);

    if (!product) {
      return HttpResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(product);
  })
];
