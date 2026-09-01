import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableHeaderProps = ComponentPropsWithoutRef<'thead'>;

export const TableHeader = ({ className, ...rest }: TableHeaderProps) => {
  return (
    <thead
      data-slot="table-header"
      className={cn('[&_tr]:border-b', className)}
      {...rest}
    />
  );
};
