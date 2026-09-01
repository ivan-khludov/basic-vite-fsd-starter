import { type ComponentPropsWithoutRef } from 'react';

import { Slot } from 'radix-ui';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

type ButtonProps = ComponentPropsWithoutRef<typeof Button>;

interface PaginationLinkProps extends ComponentPropsWithoutRef<'a'> {
  size?: ButtonProps['size'];
  asChild?: boolean;
  isActive?: boolean;
}

export const PaginationLink = ({
  size = 'icon',
  asChild = false,
  isActive,
  className,
  children,
  ...rest
}: PaginationLinkProps) => {
  const Component = asChild ? Slot.Root : 'a';

  return (
    <Button
      asChild
      variant={isActive ? 'outline' : 'ghost'}
      size={size}
      className={cn(className)}
    >
      <Component
        aria-current={isActive ? 'page' : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...rest}
      >
        {children}
      </Component>
    </Button>
  );
};

PaginationLink.displayName = 'PaginationLink';
