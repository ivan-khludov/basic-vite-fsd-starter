import { type ComponentPropsWithoutRef } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const emptyMediaVariants = tv({
  base: [
    'mb-2 flex shrink-0 items-center justify-center',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0'
  ],
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>;

type EmptyMediaProps = ComponentPropsWithoutRef<'div'> & EmptyMediaVariants;

export const EmptyMedia = ({
  className,
  variant,
  ...rest
}: EmptyMediaProps) => {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={emptyMediaVariants({ variant, className })}
      {...rest}
    />
  );
};
