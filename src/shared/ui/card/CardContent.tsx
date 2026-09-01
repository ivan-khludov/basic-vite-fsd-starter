import { type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ className, ...rest }: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6 group-data-[size=sm]/card:px-4', className)}
      {...rest}
    />
  );
};
