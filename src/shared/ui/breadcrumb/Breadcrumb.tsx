import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type BreadcrumbProps = ComponentPropsWithoutRef<'nav'> & {
  className?: string;
};

export const Breadcrumb = ({ className, ...rest }: BreadcrumbProps) => {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(className)}
      {...rest}
    />
  );
};
