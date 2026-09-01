import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils';

type SidebarGroupActionAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SidebarGroupActionProps extends Omit<
  ComponentPropsWithoutRef<'button'>,
  SidebarGroupActionAttributesOmit
> {
  asChild?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const SidebarGroupAction = forwardRef<
  ComponentRef<'button'>,
  SidebarGroupActionProps
>(
  (
    { asChild = false, isDisabled, isHidden, hasAutoFocus, className, ...rest },
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
        data-slot="sidebar-group-action"
        data-sidebar="group-action"
        className={cn(
          'absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0',
          className
        )}
        {...rest}
      />
    );
  }
);

SidebarGroupAction.displayName = 'SidebarGroupAction';
