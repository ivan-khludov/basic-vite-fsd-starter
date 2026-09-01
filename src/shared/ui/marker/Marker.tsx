import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slot } from 'radix-ui';
import { tv, type VariantProps } from 'tailwind-variants';

const markerVariants = tv({
  base: [
    'group/marker relative flex min-h-4 w-full items-center gap-2 text-left text-sm text-muted-foreground',
    "[&_svg:not([class*='size-'])]:size-4 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground"
  ],
  variants: {
    variant: {
      default: '',
      separator:
        'before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border',
      border: 'border-b border-border pb-2'
    }
  }
});

type MarkerVariants = VariantProps<typeof markerVariants>;

interface MarkerProps extends ComponentPropsWithoutRef<'div'>, MarkerVariants {
  asChild?: boolean;
}

export const Marker = forwardRef<ComponentRef<'div'>, MarkerProps>(
  ({ variant = 'default', asChild = false, className, ...rest }, ref) => {
    const Component = asChild ? Slot.Root : 'div';

    return (
      <Component
        ref={ref}
        data-slot="marker"
        data-variant={variant}
        className={markerVariants({ variant, className })}
        {...rest}
      />
    );
  }
);

Marker.displayName = 'Marker';
