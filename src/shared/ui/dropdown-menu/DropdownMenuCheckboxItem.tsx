import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { CheckIcon } from 'lucide-react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type DropdownMenuCheckboxItemCheckedState = boolean;

type DropdownMenuCheckboxItemAttributesOmit =
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'hidden'
  | 'autoFocus';

interface DropdownMenuCheckboxItemProps extends Omit<
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemAttributesOmit
> {
  isChecked?: boolean;
  isInset?: boolean;
  isCheckedByDefault?: DropdownMenuCheckboxItemCheckedState;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const DropdownMenuCheckboxItem = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(
  (
    {
      isChecked,
      isInset,
      isCheckedByDefault,
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="dropdown-menu-checkbox-item"
        data-inset={isInset || undefined}
        checked={isChecked}
        defaultChecked={isCheckedByDefault}
        className={cn(
          'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className
        )}
        {...rest}
      >
        <span
          data-slot="dropdown-menu-checkbox-item-indicator"
          className="pointer-events-none absolute right-2 flex items-center justify-center"
        >
          <DropdownMenuPrimitive.ItemIndicator>
            <CheckIcon />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.CheckboxItem>
    );
  }
);

DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';
