import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';

type AlertDialogTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface AlertDialogTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>,
  AlertDialogTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const AlertDialogTrigger = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Trigger>,
  AlertDialogTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <AlertDialogPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="alert-dialog-trigger"
      {...rest}
    />
  );
});

AlertDialogTrigger.displayName = 'AlertDialogTrigger';
