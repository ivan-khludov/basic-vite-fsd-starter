import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type MenubarItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface MenubarItemProps extends Omit<
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>,
  MenubarItemAttributesOmit
> {
  inset?: boolean;
  variant?: 'default' | 'destructive';
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const MenubarItem = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Item>,
  MenubarItemProps
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
      <MenubarPrimitive.Item
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="menubar-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(
          'group/menubar-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive!',
          className
        )}
        {...rest}
      />
    );
  }
);

MenubarItem.displayName = 'MenubarItem';
