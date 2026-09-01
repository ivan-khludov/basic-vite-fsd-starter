import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type NavigationMenuLinkAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface NavigationMenuLinkProps extends Omit<
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const NavigationMenuLink = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkProps
>(({ isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
  return (
    <NavigationMenuPrimitive.Link
      ref={ref}
      aria-disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="navigation-menu-link"
      className={cn(
        'flex items-center gap-1.5 rounded-md p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-sm data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*="size-"])]:size-4',
        className
      )}
      {...rest}
    />
  );
});

NavigationMenuLink.displayName = 'NavigationMenuLink';
