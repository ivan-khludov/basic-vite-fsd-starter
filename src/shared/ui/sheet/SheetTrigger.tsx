import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as SheetPrimitive } from 'radix-ui';

type SheetTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SheetTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>,
  SheetTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const SheetTrigger = forwardRef<
  ComponentRef<typeof SheetPrimitive.Trigger>,
  SheetTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <SheetPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="sheet-trigger"
      {...rest}
    />
  );
});

SheetTrigger.displayName = 'SheetTrigger';
