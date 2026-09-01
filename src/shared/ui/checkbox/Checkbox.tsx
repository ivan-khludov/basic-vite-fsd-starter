import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { tv, type VariantProps } from 'tailwind-variants';

const checkboxVariants = tv({
  base: [
    'peer relative flex shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-input shadow-xs transition-shadow outline-none',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:opacity-50',
    'group-has-disabled/field:opacity-50',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary',
    'data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground',
    'after:absolute after:-inset-x-3 after:-inset-y-2',
    'dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-checked:bg-primary'
  ],
  variants: {
    uiSize: {
      md: 'size-4 [&_[data-slot=checkbox-indicator]>svg]:size-3.5',
      lg: 'size-5 [&_[data-slot=checkbox-indicator]>svg]:size-4'
    }
  },
  defaultVariants: {
    uiSize: 'md'
  }
});

type CheckboxAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

type CheckboxVariants = VariantProps<typeof checkboxVariants>;

interface CheckboxProps
  extends
    Omit<
      ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      CheckboxAttributesOmit
    >,
    CheckboxVariants {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ uiSize, isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="checkbox"
      className={checkboxVariants({ uiSize, className })}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = 'Checkbox';
