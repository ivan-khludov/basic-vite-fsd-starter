import { type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = ({ className, ...rest }: CardFooterProps) => {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4',
        className
      )}
      {...rest}
    />
  );
};
