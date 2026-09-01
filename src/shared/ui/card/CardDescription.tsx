import { type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type CardDescriptionProps = HTMLAttributes<HTMLDivElement>;

export const CardDescription = ({
  className,
  ...rest
}: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
};
