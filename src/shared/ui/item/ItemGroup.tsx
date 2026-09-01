import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ItemGroupProps = ComponentPropsWithoutRef<'div'>;

export const ItemGroup = ({ className, ...rest }: ItemGroupProps) => {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn(
        'group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2',
        className
      )}
      {...rest}
    />
  );
};
