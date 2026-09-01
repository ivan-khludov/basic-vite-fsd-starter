import {
  type Product,
  type ProductsPage,
  type ProductsQueryParams,
  type ProductsSortBy,
  type SortOrder
} from './types';

const compareNumber = (a: number, b: number, order: SortOrder) => {
  if (a === b) {
    return 0;
  }

  if (order === 'asc') {
    return a < b ? -1 : 1;
  }

  return a > b ? -1 : 1;
};

const getSortValue = (item: Product, sortBy: ProductsSortBy) => {
  if (sortBy === 'rating') {
    return item.rating;
  }

  return item.price;
};

export const sortProductsPage = (
  page: ProductsPage,
  params: Pick<ProductsQueryParams, 'order' | 'sortBy'>
): ProductsPage => {
  const { order, sortBy } = params;
  const nextItems = [...page.items].sort((left, right) => {
    return compareNumber(
      getSortValue(left, sortBy),
      getSortValue(right, sortBy),
      order
    );
  });

  return { ...page, items: nextItems };
};
