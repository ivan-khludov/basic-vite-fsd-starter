import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type BreadcrumbListProps = ComponentPropsWithoutRef<'ol'> & {
  className?: string;
};

export const BreadcrumbList = ({ className, ...rest }: BreadcrumbListProps) => {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground sm:gap-2.5',
        className
      )}
      {...rest}
    />
  );
};
