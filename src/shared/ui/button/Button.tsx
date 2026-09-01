import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

import { Slot } from 'radix-ui';

import { buttonVariants, type ButtonVariants } from './button-variants';

type ButtonAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, ButtonAttributesOmit>,
    ButtonVariants {
  asChild?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant,
      size,
      asChild = false,
      isLoading,
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const Component = asChild ? Slot.Root : 'button';

    const content: ReactNode = isLoading ? (
      <span className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
    ) : (
      children
    );

    return (
      <Component
        ref={ref}
        type={type}
        disabled={isDisabled || isLoading}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={buttonVariants({ variant, size, isLoading, className })}
        {...rest}
      >
        {content}
      </Component>
    );
  }
);

Button.displayName = 'Button';
