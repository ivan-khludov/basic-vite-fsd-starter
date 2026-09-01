import { type ComponentPropsWithoutRef } from 'react';

import { tv } from 'tailwind-variants';

const bubbleReactionsVariants = tv({
  base: [
    'absolute z-10 flex w-fit shrink-0 items-center justify-center gap-1 rounded-full bg-muted px-1.5 py-0.5 text-sm ring-3 ring-card',
    'has-[button]:p-0'
  ],
  variants: {
    side: {
      top: 'top-0 -translate-y-3/4',
      bottom: 'bottom-0 translate-y-3/4'
    },
    align: {
      start: 'left-3',
      end: 'right-3'
    }
  },
  defaultVariants: { side: 'bottom', align: 'end' }
});
type BubbleReactionsProps = ComponentPropsWithoutRef<'div'> & {
  align?: 'start' | 'end';
  side?: 'top' | 'bottom';
};
export const BubbleReactions = ({
  side = 'bottom',
  align = 'end',
  className,
  ...rest
}: BubbleReactionsProps) => {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={bubbleReactionsVariants({ side, align, className })}
      {...rest}
    />
  );
};
