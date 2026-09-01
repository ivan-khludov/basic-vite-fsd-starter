import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type EmptyHeaderProps = ComponentPropsWithoutRef<'div'>;

export const EmptyHeader = ({ className, ...rest }: EmptyHeaderProps) => {
  return (
    <div
      data-slot="empty-header"
      className={cn('flex max-w-sm flex-col items-center gap-2', className)}
      {...rest}
    />
  );
};
