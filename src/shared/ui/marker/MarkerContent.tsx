import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type MarkerContentProps = ComponentPropsWithoutRef<'span'>;

export const MarkerContent = ({ className, ...rest }: MarkerContentProps) => {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        'min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
        className
      )}
      {...rest}
    />
  );
};
