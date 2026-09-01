import { ROUTES_CONFIG } from '@/shared/config';

import { PRODUCTS_URL_KEYS } from './products-url-keys';

interface ProductsPageHrefParams {
  limit: number;
  skip: number;
}

export const buildProductsPageHref = (
  searchParams: URLSearchParams,
  { limit, skip }: ProductsPageHrefParams
) => {
  const nextSearchParams = new URLSearchParams(searchParams);

  nextSearchParams.set(PRODUCTS_URL_KEYS.limit, String(limit));

  if (skip <= 0) {
    nextSearchParams.delete(PRODUCTS_URL_KEYS.skip);
  } else {
    nextSearchParams.set(PRODUCTS_URL_KEYS.skip, String(skip));
  }

  const query = nextSearchParams.toString();

  if (!query) {
    return ROUTES_CONFIG.HOME.href;
  }

  return `${ROUTES_CONFIG.HOME.href}?${query}`;
};
