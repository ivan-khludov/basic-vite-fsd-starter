import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableCellProps = ComponentPropsWithoutRef<'td'>;

export const TableCell = ({ className, ...rest }: TableCellProps) => {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...rest}
    />
  );
};
