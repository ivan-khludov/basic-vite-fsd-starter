import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Switch as SwitchPrimitive } from 'radix-ui';
import { tv, type VariantProps } from 'tailwind-variants';

const switchVariants = tv({
  base: [
    'peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
    'data-checked:bg-primary data-unchecked:bg-input data-disabled:cursor-not-allowed data-disabled:opacity-50',
    'after:absolute after:-inset-x-3 after:-inset-y-2',
    'dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80'
  ],
  variants: {
    size: { default: 'h-[18.4px] w-[32px]', sm: 'h-[14px] w-[24px]' }
  },
  defaultVariants: { size: 'default' }
});
type SwitchAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';
type SwitchVariants = VariantProps<typeof switchVariants>;
interface SwitchProps
  extends
    Omit<
      ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
      SwitchAttributesOmit
    >,
    SwitchVariants {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}
export const Switch = forwardRef<
  ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ size, isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      disabled={isDisabled}
      hidden={isHidden}
      autoFocus={hasAutoFocus}
      data-slot="switch"
      data-size={size}
      className={switchVariants({ size, className })}
      {...rest}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  );
});
Switch.displayName = 'Switch';
