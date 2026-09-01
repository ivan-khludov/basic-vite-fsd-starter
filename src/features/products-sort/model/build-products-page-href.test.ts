import { describe, expect, it } from 'vitest';

import { buildProductsPageHref } from './build-products-page-href';

describe('buildProductsPageHref', () => {
  it('drops skip when the next page starts at zero', () => {
    const searchParams = new URLSearchParams('sortBy=rating&skip=20');

    expect(buildProductsPageHref(searchParams, { limit: 20, skip: 0 })).toBe(
      '/?sortBy=rating&limit=20'
    );
  });

  it('keeps existing query keys and writes skip for later pages', () => {
    const searchParams = new URLSearchParams('q=phone&order=desc');

    expect(buildProductsPageHref(searchParams, { limit: 10, skip: 10 })).toBe(
      '/?q=phone&order=desc&limit=10&skip=10'
    );
  });
});
