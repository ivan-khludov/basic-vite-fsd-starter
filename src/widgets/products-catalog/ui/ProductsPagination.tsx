import { useTranslation } from 'react-i18next';
import { Link, useSearchParams } from 'react-router';

import { buildProductsPageHref } from '@/features/products-sort';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/shared/ui/pagination';

interface ProductsPaginationProps {
  limit: number;
  skip: number;
  total: number;
}

export const ProductsPagination = ({
  limit,
  skip,
  total
}: ProductsPaginationProps) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const hasPreviousPage = skip > 0;
  const hasNextPage = skip + limit < total;

  if (!hasPreviousPage && !hasNextPage) {
    return null;
  }

  const previousHref = hasPreviousPage
    ? buildProductsPageHref(searchParams, {
        limit,
        skip: Math.max(0, skip - limit)
      })
    : undefined;
  const nextHref = hasNextPage
    ? buildProductsPageHref(searchParams, { limit, skip: skip + limit })
    : undefined;
  const currentHref = buildProductsPageHref(searchParams, { limit, skip });
  const currentPage = Math.floor(skip / limit) + 1;

  const previousLink =
    hasPreviousPage && previousHref ? (
      <PaginationItem>
        <PaginationPrevious asChild text={t('products.previous')}>
          <Link to={previousHref} aria-label={t('products.previous')} />
        </PaginationPrevious>
      </PaginationItem>
    ) : null;

  const currentPageLink = (
    <PaginationItem>
      <PaginationLink asChild isActive>
        <Link
          to={currentHref}
          aria-label={t('products.page', { page: currentPage })}
        >
          {currentPage}
        </Link>
      </PaginationLink>
    </PaginationItem>
  );

  const nextLink =
    hasNextPage && nextHref ? (
      <PaginationItem>
        <PaginationNext asChild text={t('products.next')}>
          <Link to={nextHref} aria-label={t('products.next')} />
        </PaginationNext>
      </PaginationItem>
    ) : null;

  return (
    <Pagination aria-label={t('products.pagination')}>
      <PaginationContent>
        {previousLink}
        {currentPageLink}
        {nextLink}
      </PaginationContent>
    </Pagination>
  );
};

ProductsPagination.displayName = 'ProductsPagination';
