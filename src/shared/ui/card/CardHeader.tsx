import { type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = ({ className, ...rest }: CardHeaderProps) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4',
        className
      )}
      {...rest}
    />
  );
};
