import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { ChevronRightIcon } from 'lucide-react';
import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type MenubarSubTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface MenubarSubTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerAttributesOmit
> {
  inset?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const MenubarSubTrigger = forwardRef<
  ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerProps
>(
  (
    { inset, isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <MenubarPrimitive.SubTrigger
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="menubar-sub-trigger"
        data-inset={inset}
        className={cn(
          'flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-8 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*="size-"])]:size-4',
          className
        )}
        {...rest}
      >
        {children}
        <ChevronRightIcon className="ml-auto size-4" />
      </MenubarPrimitive.SubTrigger>
    );
  }
);

MenubarSubTrigger.displayName = 'MenubarSubTrigger';
