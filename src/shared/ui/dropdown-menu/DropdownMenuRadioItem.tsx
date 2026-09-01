import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { CheckIcon } from 'lucide-react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type DropdownMenuRadioItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface DropdownMenuRadioItemProps extends Omit<
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemAttributesOmit
> {
  inset?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const DropdownMenuRadioItem = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemProps
>(
  (
    { inset, isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.RadioItem
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="dropdown-menu-radio-item"
        data-inset={inset}
        className={cn(
          'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className
        )}
        {...rest}
      >
        <span
          data-slot="dropdown-menu-radio-item-indicator"
          className="pointer-events-none absolute right-2 flex items-center justify-center"
        >
          <DropdownMenuPrimitive.ItemIndicator>
            <CheckIcon />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.RadioItem>
    );
  }
);

DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';
