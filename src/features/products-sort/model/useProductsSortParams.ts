import { useCallback, useMemo } from 'react';

import { useSearchParams } from 'react-router';

import { type ProductsSortBy, type SortOrder } from '@/entities/product';
import { APP_CONFIG } from '@/shared/config';

import { PRODUCTS_URL_KEYS } from './products-url-keys';

const DEFAULT_SORT_BY: ProductsSortBy = 'price';
const DEFAULT_ORDER: SortOrder = 'asc';
const DEFAULT_LIMIT = APP_CONFIG.products.defaultLimit;
const DEFAULT_SKIP = APP_CONFIG.products.defaultSkip;

const parseNumberOr = (value: string | null, fallback: number) => {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return parsed;
};

const parseSortBy = (value: string | null): ProductsSortBy => {
  if (value === 'rating') {
    return 'rating';
  }

  return DEFAULT_SORT_BY;
};

const parseOrder = (value: string | null): SortOrder => {
  if (value === 'desc') {
    return 'desc';
  }

  return DEFAULT_ORDER;
};

interface ProductsSortValue {
  order: SortOrder;
  sortBy: ProductsSortBy;
}

export const useProductsSortParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = useMemo(() => {
    return parseSortBy(searchParams.get(PRODUCTS_URL_KEYS.sortBy));
  }, [searchParams]);

  const order = useMemo(() => {
    return parseOrder(searchParams.get(PRODUCTS_URL_KEYS.order));
  }, [searchParams]);

  const limit = useMemo(() => {
    const parsed = parseNumberOr(
      searchParams.get(PRODUCTS_URL_KEYS.limit),
      DEFAULT_LIMIT
    );

    return parsed > 0 ? parsed : DEFAULT_LIMIT;
  }, [searchParams]);

  const skip = useMemo(() => {
    const parsed = parseNumberOr(
      searchParams.get(PRODUCTS_URL_KEYS.skip),
      DEFAULT_SKIP
    );

    return parsed >= 0 ? parsed : DEFAULT_SKIP;
  }, [searchParams]);

  const setSort = useCallback(
    ({ order: nextOrder, sortBy: nextSortBy }: ProductsSortValue) => {
      const next = new URLSearchParams(searchParams);
      next.set(PRODUCTS_URL_KEYS.sortBy, nextSortBy);
      next.set(PRODUCTS_URL_KEYS.order, nextOrder);
      next.delete(PRODUCTS_URL_KEYS.skip);
      setSearchParams(next);
    },
    [searchParams, setSearchParams]
  );

  const setSortBy = useCallback(
    (nextSortBy: ProductsSortBy) => {
      setSort({ order, sortBy: nextSortBy });
    },
    [order, setSort]
  );

  const setOrder = useCallback(
    (nextOrder: SortOrder) => {
      setSort({ order: nextOrder, sortBy });
    },
    [setSort, sortBy]
  );

  const setPagination = useCallback(
    (next: { limit: number; skip: number }) => {
      const nextSearchParams = new URLSearchParams(searchParams);
      nextSearchParams.set(PRODUCTS_URL_KEYS.limit, String(next.limit));

      if (next.skip <= 0) {
        nextSearchParams.delete(PRODUCTS_URL_KEYS.skip);
      } else {
        nextSearchParams.set(PRODUCTS_URL_KEYS.skip, String(next.skip));
      }
      setSearchParams(nextSearchParams);
    },
    [searchParams, setSearchParams]
  );

  return {
    limit,
    order,
    setOrder,
    setPagination,
    setSort,
    setSortBy,
    skip,
    sortBy
  };
};
