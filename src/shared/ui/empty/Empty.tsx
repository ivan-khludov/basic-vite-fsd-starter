import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type EmptyProps = ComponentPropsWithoutRef<'div'>;

export const Empty = ({ className, ...rest }: EmptyProps) => {
  return (
    <div
      data-slot="empty"
      className={cn(
        'flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-lg border-dashed p-12 text-center text-balance',
        className
      )}
      {...rest}
    />
  );
};
