import { type ComponentPropsWithoutRef } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const buttonGroupVariants = tv({
  base: [
    'group/button-group flex w-fit items-stretch',
    'has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md',
    '*:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*="w-"])]:w-fit [&>input]:flex-1'
  ],
  variants: {
    orientation: {
      horizontal:
        '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md!',
      vertical:
        'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md!'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
});

type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;

type ButtonGroupProps = ComponentPropsWithoutRef<'div'> & ButtonGroupVariants;

export const ButtonGroup = ({
  orientation,
  className,
  ...rest
}: ButtonGroupProps) => {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={buttonGroupVariants({ orientation, className })}
      {...rest}
    />
  );
};
