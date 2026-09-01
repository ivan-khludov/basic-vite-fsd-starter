import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type NavigationMenuItemProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Item
>;

export const NavigationMenuItem = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Item>,
  NavigationMenuItemProps
>(({ className, ...rest }, ref) => {
  return (
    <NavigationMenuPrimitive.Item
      ref={ref}
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...rest}
    />
  );
});

NavigationMenuItem.displayName = 'NavigationMenuItem';
