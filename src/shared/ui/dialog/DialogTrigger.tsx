import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

type DialogTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface DialogTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>,
  DialogTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const DialogTrigger = forwardRef<
  ComponentRef<typeof DialogPrimitive.Trigger>,
  DialogTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <DialogPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="dialog-trigger"
      {...rest}
    />
  );
});

DialogTrigger.displayName = 'DialogTrigger';
