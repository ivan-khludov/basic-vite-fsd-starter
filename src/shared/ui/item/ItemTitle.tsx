import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ItemTitleProps = ComponentPropsWithoutRef<'div'>;

export const ItemTitle = ({ className, ...rest }: ItemTitleProps) => {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4',
        className
      )}
      {...rest}
    />
  );
};
