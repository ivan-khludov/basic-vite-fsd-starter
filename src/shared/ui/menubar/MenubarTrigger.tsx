import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type MenubarTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface MenubarTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const MenubarTrigger = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="menubar-trigger"
      className={cn(
        'flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted',
        className
      )}
      {...rest}
    />
  );
});

MenubarTrigger.displayName = 'MenubarTrigger';
