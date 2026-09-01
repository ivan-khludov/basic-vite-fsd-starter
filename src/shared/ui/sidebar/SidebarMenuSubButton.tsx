import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils';

type SidebarMenuSubButtonAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SidebarMenuSubButtonProps extends Omit<
  ComponentPropsWithoutRef<'a'>,
  SidebarMenuSubButtonAttributesOmit
> {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const SidebarMenuSubButton = forwardRef<
  ComponentRef<'a'>,
  SidebarMenuSubButtonProps
>(
  (
    {
      asChild = false,
      size = 'md',
      isActive = false,
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = asChild ? Slot.Root : 'a';

    return (
      <Component
        ref={ref}
        aria-disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="sidebar-menu-sub-button"
        data-sidebar="menu-sub-button"
        data-size={size}
        data-active={isActive}
        className={cn(
          'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
          className
        )}
        {...rest}
      />
    );
  }
);

SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';
