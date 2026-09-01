import { type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type CardTitleProps = HTMLAttributes<HTMLDivElement>;

export const CardTitle = ({ className, ...rest }: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'text-base leading-normal font-medium group-data-[size=sm]/card:text-sm',
        className
      )}
      {...rest}
    />
  );
};
