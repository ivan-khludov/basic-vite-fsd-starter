import { type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type CardActionProps = HTMLAttributes<HTMLDivElement>;

export const CardAction = ({ className, ...rest }: CardActionProps) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className
      )}
      {...rest}
    />
  );
};
