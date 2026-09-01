import { type ComponentPropsWithoutRef } from 'react';

import { Separator } from '@/shared/ui/separator';
import { cn } from '@/shared/utils';

type ItemSeparatorProps = ComponentPropsWithoutRef<typeof Separator>;

export const ItemSeparator = ({ className, ...rest }: ItemSeparatorProps) => {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('my-2', className)}
      {...rest}
    />
  );
};
