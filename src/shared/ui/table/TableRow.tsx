import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableRowProps = ComponentPropsWithoutRef<'tr'>;

export const TableRow = ({ className, ...rest }: TableRowProps) => {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted',
        className
      )}
      {...rest}
    />
  );
};
