import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type TableProps = ComponentPropsWithoutRef<'table'>;

export const Table = ({ className, ...rest }: TableProps) => {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...rest}
      />
    </div>
  );
};
