import { type ComponentPropsWithoutRef } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

const inputGroupButtonVariants = tv({
  base: ['flex items-center gap-2 text-sm shadow-none'],
  variants: {
    uiSize: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: '',
      'icon-xs': 'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0'
    }
  },
  defaultVariants: {
    uiSize: 'xs'
  }
});

type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>;

type InputGroupButtonProps = Omit<
  ComponentPropsWithoutRef<typeof Button>,
  'size'
> &
  InputGroupButtonVariants;

export const InputGroupButton = ({
  type = 'button',
  variant = 'ghost',
  uiSize,
  className,
  ...rest
}: InputGroupButtonProps) => {
  return (
    <Button
      type={type}
      data-size={uiSize}
      variant={variant}
      size="xs"
      className={cn(inputGroupButtonVariants({ uiSize }), className)}
      {...rest}
    />
  );
};
