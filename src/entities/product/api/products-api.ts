import { z } from 'zod';

import { requestJson } from '@/shared/api';

import {
  type Product,
  type ProductsPage,
  type ProductsQueryParams,
  type ProductWritePayload
} from '../model/types';

// Responses are validated at the boundary so the rest of the app can trust the
// domain types instead of relying on a blind cast.
const dummyJsonProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  rating: z.number().optional(),
  thumbnail: z.string().optional(),
  brand: z.string().optional(),
  sku: z.string().optional()
});

const dummyJsonProductsResponseSchema = z.object({
  products: z.array(dummyJsonProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number()
});

type DummyJsonProduct = z.infer<typeof dummyJsonProductSchema>;

const mapProduct = (product: DummyJsonProduct): Product => {
  return {
    brand: product.brand ?? '',
    id: product.id,
    price: product.price,
    rating: product.rating ?? 0,
    sku: product.sku ?? '',
    thumbnailUrl: product.thumbnail ?? '',
    title: product.title
  };
};

const parseProduct = (payload: unknown): Product => {
  return mapProduct(dummyJsonProductSchema.parse(payload));
};

const buildListPath = ({
  limit,
  order,
  skip,
  sortBy
}: Omit<ProductsQueryParams, 'q'>) => {
  const searchParams = new URLSearchParams({
    limit: String(limit),
    order,
    skip: String(skip),
    sortBy
  });

  return `/products?${searchParams.toString()}`;
};

const buildSearchPath = ({
  limit,
  q,
  skip
}: Pick<ProductsQueryParams, 'limit' | 'q' | 'skip'>) => {
  const searchParams = new URLSearchParams({
    limit: String(limit),
    q,
    skip: String(skip)
  });

  return `/products/search?${searchParams.toString()}`;
};

export const fetchProductsPage = async (
  params: ProductsQueryParams,
  signal?: AbortSignal
): Promise<ProductsPage> => {
  const hasQuery = params.q.trim().length > 0;
  const path = hasQuery ? buildSearchPath(params) : buildListPath(params);

  const payload = await requestJson<unknown>({ path, signal });
  const response = dummyJsonProductsResponseSchema.parse(payload);

  return {
    items: response.products.map(mapProduct),
    limit: response.limit,
    skip: response.skip,
    total: response.total
  };
};

export const fetchProduct = async (
  productId: number,
  signal?: AbortSignal
): Promise<Product> => {
  const payload = await requestJson<unknown>({
    path: `/products/${productId}`,
    signal
  });

  return parseProduct(payload);
};

export const createProduct = async (
  payload: ProductWritePayload
): Promise<Product> => {
  const response = await requestJson<unknown>({
    body: payload,
    method: 'POST',
    path: '/products/add'
  });

  return parseProduct(response);
};

export const updateProduct = async (
  productId: number,
  payload: ProductWritePayload
): Promise<Product> => {
  const response = await requestJson<unknown>({
    body: payload,
    method: 'PUT',
    path: `/products/${productId}`
  });

  return parseProduct(response);
};

export const deleteProduct = async (productId: number): Promise<Product> => {
  const response = await requestJson<unknown>({
    method: 'DELETE',
    path: `/products/${productId}`
  });

  return parseProduct(response);
};
