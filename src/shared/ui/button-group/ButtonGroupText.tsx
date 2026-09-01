import { type ComponentPropsWithoutRef } from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils';

interface ButtonGroupTextProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export const ButtonGroupText = ({
  asChild = false,
  className,
  ...rest
}: ButtonGroupTextProps) => {
  const Component = asChild ? Slot.Root : 'div';

  return (
    <Component
      className={cn(
        'flex items-center gap-2 rounded-md border bg-muted px-2.5 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4',
        className
      )}
      {...rest}
    />
  );
};
