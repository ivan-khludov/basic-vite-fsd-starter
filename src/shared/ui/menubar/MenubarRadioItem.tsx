import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { CheckIcon } from 'lucide-react';
import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type MenubarRadioItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface MenubarRadioItemProps extends Omit<
  ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemAttributesOmit
> {
  inset?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const MenubarRadioItem = forwardRef<
  ComponentRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemProps
>(
  (
    { inset, isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <MenubarPrimitive.RadioItem
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="menubar-radio-item"
        data-inset={inset}
        className={cn(
          'relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
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
      </MenubarPrimitive.RadioItem>
    );
  }
);

MenubarRadioItem.displayName = 'MenubarRadioItem';
