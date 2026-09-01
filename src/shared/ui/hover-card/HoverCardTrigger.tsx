import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { HoverCard as HoverCardPrimitive } from 'radix-ui';

type HoverCardTriggerAttributesOmit = 'hidden' | 'autoFocus';

interface HoverCardTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>,
  HoverCardTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const HoverCardTrigger = forwardRef<
  ComponentRef<typeof HoverCardPrimitive.Trigger>,
  HoverCardTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <HoverCardPrimitive.Trigger
      ref={ref}
      aria-disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="hover-card-trigger"
      {...rest}
    />
  );
});

HoverCardTrigger.displayName = 'HoverCardTrigger';
