import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils';

type SidebarMenuActionAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SidebarMenuActionProps extends Omit<
  ComponentPropsWithoutRef<'button'>,
  SidebarMenuActionAttributesOmit
> {
  asChild?: boolean;
  showOnHover?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const SidebarMenuAction = forwardRef<
  ComponentRef<'button'>,
  SidebarMenuActionProps
>(
  (
    {
      asChild = false,
      showOnHover = false,
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = asChild ? Slot.Root : 'button';

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : 'button'}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="sidebar-menu-action"
        data-sidebar="menu-action"
        className={cn(
          'absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0',
          showOnHover &&
            'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0',
          className
        )}
        {...rest}
      />
    );
  }
);

SidebarMenuAction.displayName = 'SidebarMenuAction';
