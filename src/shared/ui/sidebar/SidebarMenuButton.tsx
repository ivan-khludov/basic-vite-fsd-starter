import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { Slot } from 'radix-ui';
import { tv, type VariantProps } from 'tailwind-variants';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

import { useSidebar } from './useSidebar';

const sidebarMenuButtonVariants = tv({
  base: [
    'peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding]',
    'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
    'focus-visible:ring-2',
    'active:bg-sidebar-accent active:text-sidebar-accent-foreground',
    'disabled:pointer-events-none disabled:opacity-50',
    'group-has-data-[sidebar=menu-action]/menu-item:pr-8',
    'aria-disabled:pointer-events-none aria-disabled:opacity-50',
    'data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground',
    'group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate'
  ],
  variants: {
    variant: {
      default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      outline:
        'bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]'
    },
    size: {
      default: 'h-8 text-sm',
      sm: 'h-7 text-xs',
      lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!'
    }
  },
  defaultVariants: { variant: 'default', size: 'default' }
});

type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;

type SidebarMenuButtonAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SidebarMenuButtonProps
  extends
    Omit<ComponentPropsWithoutRef<'button'>, SidebarMenuButtonAttributesOmit>,
    SidebarMenuButtonVariants {
  asChild?: boolean;
  tooltip?: string | ComponentPropsWithoutRef<typeof TooltipContent>;
  isActive?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const SidebarMenuButton = forwardRef<
  ComponentRef<'button'>,
  SidebarMenuButtonProps
>(
  (
    {
      variant = 'default',
      size = 'default',
      asChild = false,
      isActive = false,
      isDisabled,
      isHidden,
      hasAutoFocus,
      tooltip,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = asChild ? Slot.Root : 'button';
    const { isMobile, state } = useSidebar();

    const button: ReactNode = (
      <Component
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="sidebar-menu-button"
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={sidebarMenuButtonVariants({ variant, size, className })}
        {...rest}
      />
    );

    if (!tooltip) {
      return button;
    }

    const tooltipProps =
      typeof tooltip === 'string' ? { children: tooltip } : tooltip;

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== 'collapsed' || isMobile}
          {...tooltipProps}
        />
      </Tooltip>
    );
  }
);

SidebarMenuButton.displayName = 'SidebarMenuButton';
