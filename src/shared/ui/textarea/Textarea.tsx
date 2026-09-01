import { forwardRef, type TextareaHTMLAttributes } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const textareaVariants = tv({
  base: [
    'flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    'placeholder:text-muted-foreground',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
    'md:text-sm',
    'dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40'
  ],
  variants: {
    uiSize: {
      md: 'px-2.5 py-2',
      lg: 'px-3 py-2.5'
    }
  },
  defaultVariants: {
    uiSize: 'md'
  }
});

type TextareaVariants = VariantProps<typeof textareaVariants>;

type TextareaAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface TextareaProps
  extends
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, TextareaAttributesOmit>,
    TextareaVariants {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ uiSize, isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="textarea"
        className={textareaVariants({ uiSize, className })}
        {...rest}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
