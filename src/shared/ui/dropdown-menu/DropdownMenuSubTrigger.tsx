import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { ChevronRightIcon } from 'lucide-react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type DropdownMenuSubTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface DropdownMenuSubTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerAttributesOmit
> {
  inset?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const DropdownMenuSubTrigger = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(
  (
    { inset, isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="dropdown-menu-sub-trigger"
        data-inset={inset}
        className={cn(
          'flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className
        )}
        {...rest}
      >
        {children}
        <ChevronRightIcon className="ml-auto" />
      </DropdownMenuPrimitive.SubTrigger>
    );
  }
);

DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';
