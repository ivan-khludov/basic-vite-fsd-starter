import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ItemHeaderProps = ComponentPropsWithoutRef<'div'>;

export const ItemHeader = ({ className, ...rest }: ItemHeaderProps) => {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className
      )}
      {...rest}
    />
  );
};
