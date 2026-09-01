import { useCallback, useMemo } from 'react';

import { useSearchParams } from 'react-router';

const QUERY_KEY = 'q';
const SKIP_KEY = 'skip';

export const useProductsSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = useMemo(() => {
    return searchParams.get(QUERY_KEY) ?? '';
  }, [searchParams]);

  const setQuery = useCallback(
    (nextQuery: string) => {
      const next = new URLSearchParams(searchParams);

      if (nextQuery.trim().length === 0) {
        next.delete(QUERY_KEY);
      } else {
        next.set(QUERY_KEY, nextQuery);
      }

      // Pagination lives in the same URL; a new query should start at page 1.
      next.delete(SKIP_KEY);
      setSearchParams(next);
    },
    [searchParams, setSearchParams]
  );

  return { q, setQuery };
};
