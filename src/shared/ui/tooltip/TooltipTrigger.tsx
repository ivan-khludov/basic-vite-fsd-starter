import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Tooltip as TooltipPrimitive } from 'radix-ui';

type TooltipTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface TooltipTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const TooltipTrigger = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="tooltip-trigger"
      {...rest}
    />
  );
});

TooltipTrigger.displayName = 'TooltipTrigger';
