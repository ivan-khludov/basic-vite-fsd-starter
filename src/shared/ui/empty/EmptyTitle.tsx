import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type EmptyTitleProps = ComponentPropsWithoutRef<'div'>;

export const EmptyTitle = ({ className, ...rest }: EmptyTitleProps) => {
  return (
    <div
      data-slot="empty-title"
      className={cn('text-lg font-medium tracking-tight', className)}
      {...rest}
    />
  );
};
