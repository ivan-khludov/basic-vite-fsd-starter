import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Toggle as TogglePrimitive } from 'radix-ui';

import { toggleVariants, type ToggleVariants } from './toggle-variants';

type ToggleAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ToggleProps
  extends
    Omit<
      ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
      ToggleAttributesOmit
    >,
    ToggleVariants {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const Toggle = forwardRef<
  ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(
  (
    {
      variant = 'default',
      size = 'default',
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <TogglePrimitive.Root
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="toggle"
        className={toggleVariants({ variant, size, className })}
        {...rest}
      />
    );
  }
);

Toggle.displayName = 'Toggle';
