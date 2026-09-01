import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type BreadcrumbPageProps = ComponentPropsWithoutRef<'span'> & {
  className?: string;
};

export const BreadcrumbPage = ({ className, ...rest }: BreadcrumbPageProps) => {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...rest}
    />
  );
};
