import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as SheetPrimitive } from 'radix-ui';

type SheetCloseAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SheetCloseProps extends Omit<
  ComponentPropsWithoutRef<typeof SheetPrimitive.Close>,
  SheetCloseAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const SheetClose = forwardRef<
  ComponentRef<typeof SheetPrimitive.Close>,
  SheetCloseProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <SheetPrimitive.Close
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="sheet-close"
      {...rest}
    />
  );
});

SheetClose.displayName = 'SheetClose';
