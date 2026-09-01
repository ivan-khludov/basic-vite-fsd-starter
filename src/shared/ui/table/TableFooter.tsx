import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableFooterProps = ComponentPropsWithoutRef<'tfoot'>;

export const TableFooter = ({ className, ...rest }: TableFooterProps) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
        className
      )}
      {...rest}
    />
  );
};
