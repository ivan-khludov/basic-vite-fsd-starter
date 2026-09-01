import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { ChevronRightIcon } from 'lucide-react';
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type ContextMenuSubTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ContextMenuSubTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerAttributesOmit
> {
  inset?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const ContextMenuSubTrigger = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(
  (
    { inset, isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <ContextMenuPrimitive.SubTrigger
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="context-menu-sub-trigger"
        data-inset={inset}
        className={cn(
          'flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-8 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className
        )}
        {...rest}
      >
        {children}
        <ChevronRightIcon className="ml-auto" />
      </ContextMenuPrimitive.SubTrigger>
    );
  }
);

ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';
