import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type BreadcrumbItemProps = ComponentPropsWithoutRef<'li'> & {
  className?: string;
};

export const BreadcrumbItem = ({ className, ...rest }: BreadcrumbItemProps) => {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...rest}
    />
  );
};
