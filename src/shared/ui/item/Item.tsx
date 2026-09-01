import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slot } from 'radix-ui';
import { tv, type VariantProps } from 'tailwind-variants';

const itemVariants = tv({
  base: [
    'group/item flex w-full flex-wrap items-center rounded-md border text-sm transition-colors duration-100 outline-none',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    '[a]:transition-colors [a]:hover:bg-muted'
  ],
  variants: {
    variant: {
      default: 'border-transparent',
      outline: 'border-border',
      muted: 'border-transparent bg-muted/50'
    },
    size: {
      default: 'gap-3.5 px-4 py-3.5',
      sm: 'gap-2.5 px-3 py-2.5',
      xs: 'gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type ItemVariants = VariantProps<typeof itemVariants>;

interface ItemProps extends ComponentPropsWithoutRef<'div'>, ItemVariants {
  asChild?: boolean;
}

export const Item = forwardRef<ComponentRef<'div'>, ItemProps>(
  (
    {
      variant = 'default',
      size = 'default',
      asChild = false,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = asChild ? Slot.Root : 'div';

    return (
      <Component
        ref={ref}
        data-slot="item"
        data-variant={variant}
        data-size={size}
        className={itemVariants({ variant, size, className })}
        {...rest}
      />
    );
  }
);

Item.displayName = 'Item';
