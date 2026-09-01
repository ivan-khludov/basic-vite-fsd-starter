import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type NavigationMenuListProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.List
>;

export const NavigationMenuList = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.List>,
  NavigationMenuListProps
>(({ className, ...rest }, ref) => {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      data-slot="navigation-menu-list"
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-0',
        className
      )}
      {...rest}
    />
  );
});

NavigationMenuList.displayName = 'NavigationMenuList';
