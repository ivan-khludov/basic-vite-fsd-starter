import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { CheckIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SelectItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SelectItemProps extends Omit<
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
  SelectItemAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const SelectItem = forwardRef<
  ComponentRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(
  (
    { isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <SelectPrimitive.Item
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="select-item"
        className={cn(
          "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
          className
        )}
        {...rest}
      >
        <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <CheckIcon className="pointer-events-none" />
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';
