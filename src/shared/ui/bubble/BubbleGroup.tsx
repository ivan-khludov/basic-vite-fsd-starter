import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type BubbleGroupProps = ComponentPropsWithoutRef<'div'>;

export const BubbleGroup = ({ className, ...rest }: BubbleGroupProps) => {
  return (
    <div
      data-slot="bubble-group"
      className={cn('flex min-w-0 flex-col gap-2', className)}
      {...rest}
    />
  );
};
