import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Collapsible as CollapsiblePrimitive } from 'radix-ui';

type CollapsibleTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface CollapsibleTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  CollapsibleTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const CollapsibleTrigger = forwardRef<
  ComponentRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  CollapsibleTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="collapsible-trigger"
      {...rest}
    />
  );
});

CollapsibleTrigger.displayName = 'CollapsibleTrigger';
