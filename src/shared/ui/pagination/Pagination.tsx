import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type PaginationProps = ComponentPropsWithoutRef<'nav'>;

export const Pagination = ({ className, ...rest }: PaginationProps) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...rest}
    />
  );
};
