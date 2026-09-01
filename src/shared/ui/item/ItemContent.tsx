import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ItemContentProps = ComponentPropsWithoutRef<'div'>;

export const ItemContent = ({ className, ...rest }: ItemContentProps) => {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none',
        className
      )}
      {...rest}
    />
  );
};
