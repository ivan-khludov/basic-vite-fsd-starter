import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableCaptionProps = ComponentPropsWithoutRef<'caption'>;

export const TableCaption = ({ className, ...rest }: TableCaptionProps) => {
  return (
    <caption
      data-slot="table-caption"
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
};
