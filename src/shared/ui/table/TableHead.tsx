import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableHeadProps = ComponentPropsWithoutRef<'th'>;

export const TableHead = ({ className, ...rest }: TableHeadProps) => {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...rest}
    />
  );
};
