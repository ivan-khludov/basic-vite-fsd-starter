import { type ReactNode } from 'react';

import { renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { useProductsSearchParams } from './useProductsSearchParams';

const renderWithRoute = (route: string) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
  };

  return renderHook(() => useProductsSearchParams(), { wrapper: Wrapper });
};

describe('useProductsSearchParams', () => {
  it('falls back to an empty query for a missing q param', () => {
    const { result } = renderWithRoute('/');

    expect(result.current.q).toBe('');
  });

  it('reads q from the URL', () => {
    const { result } = renderWithRoute('/?q=mascara');

    expect(result.current.q).toBe('mascara');
  });
});
