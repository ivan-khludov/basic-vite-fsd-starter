import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils';

type AttachmentTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface AttachmentTriggerProps extends Omit<
  ComponentPropsWithoutRef<'button'>,
  AttachmentTriggerAttributesOmit
> {
  asChild?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const AttachmentTrigger = forwardRef<
  ComponentRef<'button'>,
  AttachmentTriggerProps
>(
  (
    {
      asChild = false,
      isDisabled,
      isHidden,
      hasAutoFocus,
      type,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = asChild ? Slot.Root : 'button';

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : (type ?? 'button')}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="attachment-trigger"
        className={cn('absolute inset-0 z-10 outline-none', className)}
        {...rest}
      />
    );
  }
);

AttachmentTrigger.displayName = 'AttachmentTrigger';
