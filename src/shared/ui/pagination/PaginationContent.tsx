import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type PaginationContentProps = ComponentPropsWithoutRef<'ul'>;

export const PaginationContent = ({
  className,
  ...rest
}: PaginationContentProps) => {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex items-center gap-1', className)}
      {...rest}
    />
  );
};
