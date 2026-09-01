import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Popover as PopoverPrimitive } from 'radix-ui';

type PopoverTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface PopoverTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>,
  PopoverTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const PopoverTrigger = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Trigger>,
  PopoverTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <PopoverPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="popover-trigger"
      {...rest}
    />
  );
});

PopoverTrigger.displayName = 'PopoverTrigger';
