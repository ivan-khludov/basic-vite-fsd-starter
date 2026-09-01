import { forwardRef, type InputHTMLAttributes } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: [
    'flex h-9 w-full min-w-0 items-center justify-center rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    'placeholder:text-muted-foreground',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
    'md:text-sm',
    'dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40'
  ],
  variants: {
    uiSize: {
      md: 'h-9 px-2.5 py-1',
      lg: 'h-10 px-3 py-2'
    }
  },
  defaultVariants: {
    uiSize: 'md'
  }
});

type InputVariants = VariantProps<typeof inputVariants>;

type InputAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, InputAttributesOmit>,
    InputVariants {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ uiSize, isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="input"
        className={inputVariants({ uiSize, className })}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
