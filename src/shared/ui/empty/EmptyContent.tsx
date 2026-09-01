import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type EmptyContentProps = ComponentPropsWithoutRef<'div'>;

export const EmptyContent = ({ className, ...rest }: EmptyContentProps) => {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance',
        className
      )}
      {...rest}
    />
  );
};
