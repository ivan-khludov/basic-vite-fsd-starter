import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

type DialogCloseAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface DialogCloseProps extends Omit<
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
  DialogCloseAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const DialogClose = forwardRef<
  ComponentRef<typeof DialogPrimitive.Close>,
  DialogCloseProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <DialogPrimitive.Close
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="dialog-close"
      {...rest}
    />
  );
});

DialogClose.displayName = 'DialogClose';
