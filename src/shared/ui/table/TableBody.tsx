import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;

export const TableBody = ({ className, ...rest }: TableBodyProps) => {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...rest}
    />
  );
};
