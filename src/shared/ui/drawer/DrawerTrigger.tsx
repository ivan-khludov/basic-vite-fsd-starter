import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

type DrawerTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface DrawerTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>,
  DrawerTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const DrawerTrigger = forwardRef<
  ComponentRef<typeof DrawerPrimitive.Trigger>,
  DrawerTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, ...rest }, ref) => {
  return (
    <DrawerPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="drawer-trigger"
      {...rest}
    />
  );
});

DrawerTrigger.displayName = 'DrawerTrigger';
