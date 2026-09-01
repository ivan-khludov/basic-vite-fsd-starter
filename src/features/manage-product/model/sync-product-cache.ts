import { type QueryClient } from '@tanstack/react-query';

import {
  productQueryKey,
  sortProductsPage,
  type Product,
  type ProductsPage,
  type ProductsQueryParams
} from '@/entities/product';

const PRODUCTS_LIST_QUERY_KEY = ['products'] as const;

const isProductsQueryParams = (
  value: unknown
): value is ProductsQueryParams => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  if (!('q' in value) || !('order' in value) || !('sortBy' in value)) {
    return false;
  }

  return (
    typeof value.q === 'string' &&
    (value.order === 'asc' || value.order === 'desc') &&
    (value.sortBy === 'price' || value.sortBy === 'rating')
  );
};

const doesProductMatchQuery = (product: Product, query: string): boolean => {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery.length === 0) {
    return true;
  }

  return product.title.toLowerCase().includes(normalizedQuery);
};

const patchListPage = (
  current: ProductsPage,
  params: ProductsQueryParams,
  product: Product
): ProductsPage => {
  const hasItem = current.items.some((item) => {
    return item.id === product.id;
  });
  const doesMatchQuery = doesProductMatchQuery(product, params.q);

  if (hasItem && !doesMatchQuery) {
    return sortProductsPage(
      {
        ...current,
        items: current.items.filter((item) => {
          return item.id !== product.id;
        }),
        total: Math.max(0, current.total - 1)
      },
      params
    );
  }

  if (!doesMatchQuery) {
    return current;
  }

  if (hasItem) {
    return sortProductsPage(
      {
        ...current,
        items: current.items.map((item) => {
          return item.id === product.id ? product : item;
        })
      },
      params
    );
  }

  return sortProductsPage(
    {
      ...current,
      items: [...current.items, product],
      total: current.total + 1
    },
    params
  );
};

export const upsertProductInCache = (
  queryClient: QueryClient,
  product: Product
): void => {
  queryClient.setQueryData(productQueryKey(product.id), product);

  const entries = queryClient.getQueriesData<ProductsPage>({
    queryKey: PRODUCTS_LIST_QUERY_KEY
  });

  entries.forEach(([queryKey, current]) => {
    if (!current) {
      return;
    }

    const params = queryKey[1];

    if (!isProductsQueryParams(params)) {
      return;
    }

    queryClient.setQueryData(queryKey, patchListPage(current, params, product));
  });
};

export const removeProductFromCache = (
  queryClient: QueryClient,
  productId: number
): void => {
  queryClient.removeQueries({ queryKey: productQueryKey(productId) });

  queryClient.setQueriesData<ProductsPage>(
    { queryKey: PRODUCTS_LIST_QUERY_KEY },
    (current) => {
      if (!current) {
        return current;
      }

      const hasItem = current.items.some((item) => {
        return item.id === productId;
      });

      if (!hasItem) {
        return current;
      }

      return {
        ...current,
        items: current.items.filter((item) => {
          return item.id !== productId;
        }),
        total: Math.max(0, current.total - 1)
      };
    }
  );
};
