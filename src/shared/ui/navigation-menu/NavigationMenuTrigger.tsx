import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { ChevronDownIcon } from 'lucide-react';
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import { tv } from 'tailwind-variants';

import { cn } from '@/shared/utils';

const navigationMenuTriggerStyle = tv({
  base: [
    'group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all outline-none',
    'hover:bg-muted',
    'focus:bg-muted',
    'focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1',
    'disabled:pointer-events-none disabled:opacity-50',
    'data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted'
  ]
});

type NavigationMenuTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface NavigationMenuTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const NavigationMenuTrigger = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(
  (
    { isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <NavigationMenuPrimitive.Trigger
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="navigation-menu-trigger"
        className={navigationMenuTriggerStyle({
          className: cn('group', className)
        })}
        {...rest}
      >
        {children}{' '}
        <ChevronDownIcon
          aria-hidden="true"
          className="relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180"
        />
      </NavigationMenuPrimitive.Trigger>
    );
  }
);

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';
