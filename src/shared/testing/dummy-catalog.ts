export interface DummyCatalogProduct {
  brand: string;
  id: number;
  price: number;
  rating: number;
  sku: string;
  thumbnail: string;
  title: string;
}

export interface DummyCatalogWritePayload {
  brand?: string;
  price?: number;
  title?: string;
}

export interface DummyCatalogPage {
  limit: number;
  products: DummyCatalogProduct[];
  skip: number;
  total: number;
}

export const TEST_PRODUCTS = [
  {
    id: 1,
    title: 'Essence Mascara',
    price: 9.99,
    rating: 4.5,
    thumbnail: 'https://cdn.dummyjson.com/product-1.webp',
    brand: 'Essence',
    sku: 'RCH45Q1A'
  },
  {
    id: 2,
    title: 'Eyeshadow Palette',
    price: 19.99,
    rating: 4.1,
    thumbnail: '',
    brand: 'Glamour Beauty',
    sku: 'RCH45Q1B'
  }
] as const satisfies readonly DummyCatalogProduct[];

const DEFAULT_PAGE_LIMIT = 20;
const DEFAULT_CREATED_ID = 101;

export const cloneDummyCatalog = (): DummyCatalogProduct[] => {
  return TEST_PRODUCTS.map((product) => {
    return { ...product };
  });
};

const parsePageNumber = (value: string | null, fallback: number) => {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return fallback;
  }

  return parsed;
};

export const filterDummyCatalogByQuery = (
  products: DummyCatalogProduct[],
  query: string
) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    return product.title.toLowerCase().includes(normalizedQuery);
  });
};

export const sortDummyCatalog = (
  products: DummyCatalogProduct[],
  sortBy: string | null,
  order: string | null
) => {
  if (sortBy !== 'price' && sortBy !== 'rating') {
    return products;
  }

  const direction = order === 'desc' ? -1 : 1;

  return [...products].sort((left, right) => {
    return (left[sortBy] - right[sortBy]) * direction;
  });
};

export const paginateDummyCatalog = (
  products: DummyCatalogProduct[],
  searchParams: URLSearchParams
): DummyCatalogPage => {
  const parsedLimit = parsePageNumber(
    searchParams.get('limit'),
    DEFAULT_PAGE_LIMIT
  );
  const limit = parsedLimit > 0 ? parsedLimit : DEFAULT_PAGE_LIMIT;
  const skip = parsePageNumber(searchParams.get('skip'), 0);
  const sorted = sortDummyCatalog(
    products,
    searchParams.get('sortBy'),
    searchParams.get('order')
  );

  return {
    limit,
    products: sorted.slice(skip, skip + limit),
    skip,
    total: sorted.length
  };
};

export const getDummyCatalogProduct = (
  products: DummyCatalogProduct[],
  productId: number
) => {
  return products.find((product) => {
    return product.id === productId;
  });
};

export const createDummyCatalogProduct = (
  payload: DummyCatalogWritePayload,
  productId = DEFAULT_CREATED_ID
): DummyCatalogProduct => {
  return {
    brand: payload.brand ?? '',
    id: productId,
    price: payload.price ?? 1,
    rating: 0,
    sku: '',
    thumbnail: '',
    title: payload.title ?? 'Untitled'
  };
};

export const updateDummyCatalogProduct = (
  current: DummyCatalogProduct | undefined,
  productId: number,
  payload: DummyCatalogWritePayload
): DummyCatalogProduct => {
  return {
    brand: payload.brand ?? current?.brand ?? '',
    id: productId,
    price: payload.price ?? current?.price ?? 1,
    rating: current?.rating ?? 0,
    sku: current?.sku ?? '',
    thumbnail: current?.thumbnail ?? '',
    title: payload.title ?? current?.title ?? 'Untitled'
  };
};

export const removeDummyCatalogProduct = (
  products: DummyCatalogProduct[],
  productId: number
) => {
  return products.filter((product) => {
    return product.id !== productId;
  });
};
