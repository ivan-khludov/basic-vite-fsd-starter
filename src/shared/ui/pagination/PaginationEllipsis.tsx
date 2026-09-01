import { type ComponentPropsWithoutRef } from 'react';

import { MoreHorizontalIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

type PaginationEllipsisProps = ComponentPropsWithoutRef<'span'>;

export const PaginationEllipsis = ({
  className,
  ...rest
}: PaginationEllipsisProps) => {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-9 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...rest}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More pages</span>
    </span>
  );
};
