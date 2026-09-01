import { QueryClient } from '@tanstack/react-query';
import { describe, expect, it } from 'vitest';

import {
  productsQueryKey,
  type Product,
  type ProductsPage,
  type ProductsQueryParams
} from '@/entities/product';
import { TEST_PRODUCTS } from '@/shared/testing';

import {
  removeProductFromCache,
  upsertProductInCache
} from './sync-product-cache';

const toProduct = (item: (typeof TEST_PRODUCTS)[number]): Product => {
  return {
    brand: item.brand,
    id: item.id,
    price: item.price,
    rating: item.rating,
    sku: item.sku,
    thumbnailUrl: item.thumbnail,
    title: item.title
  };
};

const createParams = (
  overrides: Partial<ProductsQueryParams> = {}
): ProductsQueryParams => {
  return {
    limit: 20,
    order: 'asc',
    q: '',
    skip: 0,
    sortBy: 'price',
    ...overrides
  };
};

const createPage = (items: Product[], total = items.length) => {
  return {
    items,
    limit: 20,
    skip: 0,
    total
  };
};

const mascara = toProduct(TEST_PRODUCTS[0]);
const palette = toProduct(TEST_PRODUCTS[1]);

const candle: Product = {
  brand: 'Acme',
  id: 101,
  price: 12,
  rating: 0,
  sku: '',
  thumbnailUrl: '',
  title: 'New Candle'
};

describe('sync-product-cache', () => {
  it('keeps a created product out of search caches that do not match the title', () => {
    const queryClient = new QueryClient();
    const listParams = createParams();
    const searchParams = createParams({ q: 'mascara' });

    queryClient.setQueryData(
      productsQueryKey(listParams),
      createPage([mascara, palette])
    );
    queryClient.setQueryData(
      productsQueryKey(searchParams),
      createPage([mascara], 1)
    );

    upsertProductInCache(queryClient, candle);

    expect(
      queryClient.getQueryData(productsQueryKey(listParams))
    ).toMatchObject({
      items: [mascara, candle, palette],
      total: 3
    });
    expect(
      queryClient.getQueryData(productsQueryKey(searchParams))
    ).toMatchObject({
      items: [mascara],
      total: 1
    });
  });

  it('re-sorts a cached page after a price update', () => {
    const queryClient = new QueryClient();
    const listParams = createParams({ order: 'asc', sortBy: 'price' });

    queryClient.setQueryData(
      productsQueryKey(listParams),
      createPage([palette, mascara])
    );

    upsertProductInCache(queryClient, { ...mascara, price: 30 });

    const page = queryClient.getQueryData<ProductsPage>(
      productsQueryKey(listParams)
    );

    expect(page?.items.map((item) => item.id)).toEqual([
      palette.id,
      mascara.id
    ]);
    expect(page?.items[1]?.price).toBe(30);
  });

  it('removes a deleted product from list caches', () => {
    const queryClient = new QueryClient();
    const listParams = createParams();

    queryClient.setQueryData(
      productsQueryKey(listParams),
      createPage([mascara, palette])
    );

    removeProductFromCache(queryClient, mascara.id);

    expect(
      queryClient.getQueryData(productsQueryKey(listParams))
    ).toMatchObject({
      items: [palette],
      total: 1
    });
  });
});
