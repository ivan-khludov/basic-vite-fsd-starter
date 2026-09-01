import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type PopoverHeaderProps = ComponentPropsWithoutRef<'div'>;

export const PopoverHeader = ({ className, ...rest }: PopoverHeaderProps) => {
  return (
    <div
      data-slot="popover-header"
      className={cn('flex flex-col gap-1 text-sm', className)}
      {...rest}
    />
  );
};
