import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ItemFooterProps = ComponentPropsWithoutRef<'div'>;

export const ItemFooter = ({ className, ...rest }: ItemFooterProps) => {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className
      )}
      {...rest}
    />
  );
};
