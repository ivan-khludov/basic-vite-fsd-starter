import { forwardRef, type ReactNode } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

type ComboboxTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ComboboxTriggerProps extends Omit<
  ComboboxPrimitive.Trigger.Props,
  ComboboxTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const ComboboxTrigger = forwardRef<
  HTMLButtonElement,
  ComboboxTriggerProps
>(
  (
    { isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <ComboboxPrimitive.Trigger
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="combobox-trigger"
        className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
        {...rest}
      >
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
      </ComboboxPrimitive.Trigger>
    );
  }
);

ComboboxTrigger.displayName = 'ComboboxTrigger';
