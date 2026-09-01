import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { CheckIcon } from 'lucide-react';
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type ContextMenuRadioItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ContextMenuRadioItemProps extends Omit<
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemAttributesOmit
> {
  inset?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const ContextMenuRadioItem = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemProps
>(
  (
    { inset, isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <ContextMenuPrimitive.RadioItem
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="context-menu-radio-item"
        data-inset={inset}
        className={cn(
          'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className
        )}
        {...rest}
      >
        <span className="pointer-events-none absolute right-2">
          <ContextMenuPrimitive.ItemIndicator>
            <CheckIcon />
          </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </ContextMenuPrimitive.RadioItem>
    );
  }
);

ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';
