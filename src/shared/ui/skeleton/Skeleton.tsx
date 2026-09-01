import { type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ className, ...rest }: SkeletonProps) => {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...rest}
    />
  );
};
