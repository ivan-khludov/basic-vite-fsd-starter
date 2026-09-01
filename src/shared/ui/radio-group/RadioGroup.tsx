import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type RadioGroupAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface RadioGroupProps extends Omit<
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const RadioGroup = forwardRef<
  ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="radio-group"
      className={cn('grid w-full gap-3', className)}
      {...rest}
    />
  );
});

RadioGroup.displayName = 'RadioGroup';
