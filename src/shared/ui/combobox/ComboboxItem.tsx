import { forwardRef, type ReactNode } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

type ComboboxItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ComboboxItemProps extends Omit<
  ComboboxPrimitive.Item.Props,
  ComboboxItemAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const ComboboxItem = forwardRef<HTMLDivElement, ComboboxItemProps>(
  (
    { isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <ComboboxPrimitive.Item
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="combobox-item"
        className={cn(
          'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className
        )}
        {...rest}
      >
        {children}
        <ComboboxPrimitive.ItemIndicator
          render={
            <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
          }
        >
          <CheckIcon className="pointer-events-none" />
        </ComboboxPrimitive.ItemIndicator>
      </ComboboxPrimitive.Item>
    );
  }
);

ComboboxItem.displayName = 'ComboboxItem';
