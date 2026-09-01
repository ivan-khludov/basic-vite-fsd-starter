import { forwardRef } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import { XIcon } from 'lucide-react';

import { InputGroupButton } from '@/shared/ui/input-group';
import { cn } from '@/shared/utils';

type ComboboxClearAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ComboboxClearProps extends Omit<
  ComboboxPrimitive.Clear.Props,
  ComboboxClearAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const ComboboxClear = forwardRef<HTMLButtonElement, ComboboxClearProps>(
  ({ isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
    return (
      <ComboboxPrimitive.Clear
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="combobox-clear"
        render={<InputGroupButton variant="ghost" uiSize="icon-xs" />}
        className={cn(className)}
        {...rest}
      >
        <XIcon className="pointer-events-none" />
      </ComboboxPrimitive.Clear>
    );
  }
);

ComboboxClear.displayName = 'ComboboxClear';
