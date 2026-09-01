import { type ReactNode } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@/shared/ui/input-group';
import { cn } from '@/shared/utils';

import { ComboboxClear } from './ComboboxClear';
import { ComboboxTrigger } from './ComboboxTrigger';

type ComboboxInputProps = Omit<ComboboxPrimitive.Input.Props, 'disabled'> & {
  showTrigger?: boolean;
  showClear?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
};

export const ComboboxInput = ({
  isDisabled = false,
  showTrigger = true,
  showClear = false,
  className,
  children,
  ...rest
}: ComboboxInputProps) => {
  return (
    <InputGroup className={cn('w-auto', className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput isDisabled={isDisabled} />}
        {...rest}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            uiSize="icon-xs"
            variant="ghost"
            asChild
            data-slot="input-group-button"
            isDisabled={isDisabled}
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear isDisabled={isDisabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  );
};
