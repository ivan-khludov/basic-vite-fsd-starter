import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

import { NavigationMenuViewport } from './NavigationMenuViewport';

interface NavigationMenuProps extends ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> {
  viewport?: boolean;
  children?: ReactNode;
}

export const NavigationMenu = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ viewport = true, className, children, ...rest }, ref) => {
  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        className
      )}
      {...rest}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
});

NavigationMenu.displayName = 'NavigationMenu';
