import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type PopoverTitleProps = ComponentPropsWithoutRef<'div'>;

export const PopoverTitle = ({ className, ...rest }: PopoverTitleProps) => {
  return (
    <div
      data-slot="popover-title"
      className={cn('font-medium', className)}
      {...rest}
    />
  );
};
