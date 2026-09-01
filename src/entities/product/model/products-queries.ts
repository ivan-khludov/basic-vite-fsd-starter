import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/shared/api';

import { fetchProduct, fetchProductsPage } from '../api/products-api';
import { sortProductsPage } from './sort-products';
import {
  type Product,
  type ProductsPage,
  type ProductsQueryParams
} from './types';

export const productsQueryKey = (params: ProductsQueryParams) => {
  return ['products', params] as const;
};

export const productQueryKey = (productId: number) => {
  return ['product', productId] as const;
};

const isNotFoundError = (error: unknown): boolean => {
  return error instanceof ApiError && error.status === 404;
};

export const useProductsQuery = (params: ProductsQueryParams) => {
  return useQuery<ProductsPage, ApiError>({
    queryFn: async ({ signal }) => {
      const page = await fetchProductsPage(params, signal);
      const hasQuery = params.q.trim().length > 0;

      // DummyJSON search does not accept sortBy/order, so only that path
      // is sorted on the current page in the client.
      if (!hasQuery) {
        return page;
      }

      return sortProductsPage(page, params);
    },
    queryKey: productsQueryKey(params)
  });
};

export const useProductQuery = (productId: number) => {
  const isEnabled = Number.isFinite(productId) && productId > 0;

  return useQuery<Product, ApiError>({
    enabled: isEnabled,
    queryFn: async ({ signal }) => {
      return await fetchProduct(productId, signal);
    },
    queryKey: productQueryKey(productId),
    throwOnError: (error) => {
      return !isNotFoundError(error);
    }
  });
};
