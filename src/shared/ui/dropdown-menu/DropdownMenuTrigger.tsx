import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

type DropdownMenuTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface DropdownMenuTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>,
  DropdownMenuTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const DropdownMenuTrigger = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Trigger>,
  DropdownMenuTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <DropdownMenuPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="dropdown-menu-trigger"
      {...rest}
    />
  );
});

DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';
