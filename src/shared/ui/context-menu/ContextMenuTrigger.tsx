import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type ContextMenuTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ContextMenuTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger>,
  ContextMenuTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const ContextMenuTrigger = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Trigger>,
  ContextMenuTriggerProps
>(({ isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
  return (
    <ContextMenuPrimitive.Trigger
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="context-menu-trigger"
      className={cn('select-none', className)}
      {...rest}
    />
  );
});

ContextMenuTrigger.displayName = 'ContextMenuTrigger';
