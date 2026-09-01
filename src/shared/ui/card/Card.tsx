import { forwardRef, type HTMLAttributes } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const cardVariants = tv({
  base: [
    'group/card flex flex-col overflow-hidden rounded-xl bg-card text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10',
    'has-[>img:first-child]:pt-0',
    '*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl'
  ],
  variants: { size: { default: 'gap-6 py-6', sm: 'gap-4 py-4' } },
  defaultVariants: { size: 'default' }
});

type CardVariants = VariantProps<typeof cardVariants>;

interface CardProps extends HTMLAttributes<HTMLDivElement>, CardVariants {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ size = 'default', className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        data-size={size}
        className={cardVariants({ size, className })}
        {...rest}
      />
    );
  }
);

Card.displayName = 'Card';
