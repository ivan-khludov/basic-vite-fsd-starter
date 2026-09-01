export interface Product {
  brand: string;
  id: number;
  price: number;
  rating: number;
  sku: string;
  thumbnailUrl: string;
  title: string;
}

export interface ProductWritePayload {
  brand: string;
  price: number;
  title: string;
}

export type ProductsSortBy = 'price' | 'rating';
export type SortOrder = 'asc' | 'desc';

export interface ProductsQueryParams {
  limit: number;
  order: SortOrder;
  q: string;
  skip: number;
  sortBy: ProductsSortBy;
}

export interface ProductsPage {
  items: Product[];
  limit: number;
  skip: number;
  total: number;
}
