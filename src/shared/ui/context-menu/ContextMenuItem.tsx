import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type ContextMenuItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ContextMenuItemProps extends Omit<
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemAttributesOmit
> {
  inset?: boolean;
  variant?: 'default' | 'destructive';
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const ContextMenuItem = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(
  (
    {
      inset,
      variant = 'default',
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <ContextMenuPrimitive.Item
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="context-menu-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(
          'group/context-menu-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive',
          className
        )}
        {...rest}
      />
    );
  }
);

ContextMenuItem.displayName = 'ContextMenuItem';
