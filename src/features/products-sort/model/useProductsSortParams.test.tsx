import { type ReactNode } from 'react';

import { renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { useProductsSortParams } from './useProductsSortParams';

const renderWithRoute = (route: string) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
  };

  return renderHook(() => useProductsSortParams(), { wrapper: Wrapper });
};

describe('useProductsSortParams', () => {
  it('falls back to defaults for an empty query string', () => {
    const { result } = renderWithRoute('/products');

    expect(result.current).toMatchObject({
      sortBy: 'price',
      order: 'asc',
      limit: 20,
      skip: 0
    });
  });

  it('reads supported values from the URL', () => {
    const { result } = renderWithRoute(
      '/products?sortBy=rating&order=desc&limit=5&skip=10'
    );

    expect(result.current).toMatchObject({
      sortBy: 'rating',
      order: 'desc',
      limit: 5,
      skip: 10
    });
  });

  it('ignores unsupported sort values', () => {
    const { result } = renderWithRoute('/products?sortBy=title&order=sideways');

    expect(result.current.sortBy).toBe('price');
    expect(result.current.order).toBe('asc');
  });

  it('ignores non-numeric and out-of-range pagination', () => {
    const { result } = renderWithRoute('/products?limit=abc&skip=-5');

    expect(result.current.limit).toBe(20);
    expect(result.current.skip).toBe(0);
  });
});
