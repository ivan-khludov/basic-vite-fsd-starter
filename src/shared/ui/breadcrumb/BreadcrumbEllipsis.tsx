import { type ComponentPropsWithoutRef } from 'react';

import { MoreHorizontalIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

type BreadcrumbEllipsisProps = ComponentPropsWithoutRef<'span'> & {
  className?: string;
};

export const BreadcrumbEllipsis = ({
  className,
  ...rest
}: BreadcrumbEllipsisProps) => {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        'flex size-5 items-center justify-center [&>svg]:size-4',
        className
      )}
      {...rest}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More</span>
    </span>
  );
};
