import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ItemActionsProps = ComponentPropsWithoutRef<'div'>;

export const ItemActions = ({ className, ...rest }: ItemActionsProps) => {
  return (
    <div
      data-slot="item-actions"
      className={cn('flex items-center gap-2', className)}
      {...rest}
    />
  );
};
