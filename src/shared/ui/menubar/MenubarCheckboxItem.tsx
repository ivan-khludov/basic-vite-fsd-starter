import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { CheckIcon } from 'lucide-react';
import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type MenubarCheckboxItemCheckedState = boolean;

type MenubarCheckboxItemAttributesOmit =
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'hidden'
  | 'autoFocus';

interface MenubarCheckboxItemProps extends Omit<
  ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemAttributesOmit
> {
  isChecked?: boolean;
  isInset?: boolean;
  isCheckedByDefault?: MenubarCheckboxItemCheckedState;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const MenubarCheckboxItem = forwardRef<
  ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemProps
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
      <MenubarPrimitive.CheckboxItem
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="menubar-checkbox-item"
        data-inset={isInset || undefined}
        checked={isChecked}
        defaultChecked={isCheckedByDefault}
        className={cn(
          'relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
          className
        )}
        {...rest}
      >
        <span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
          <MenubarPrimitive.ItemIndicator>
            <CheckIcon />
          </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
      </MenubarPrimitive.CheckboxItem>
    );
  }
);

MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';
