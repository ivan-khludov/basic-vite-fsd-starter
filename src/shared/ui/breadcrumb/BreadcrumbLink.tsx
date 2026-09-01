import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils';

interface BreadcrumbLinkProps extends ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
}

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(({ asChild = false, className, ...rest }, ref) => {
  const Component = asChild ? Slot.Root : 'a';

  return (
    <Component
      ref={ref}
      data-slot="breadcrumb-link"
      className={cn('transition-colors hover:text-foreground', className)}
      {...rest}
    />
  );
});

BreadcrumbLink.displayName = 'BreadcrumbLink';
