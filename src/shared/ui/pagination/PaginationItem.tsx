import { type ComponentPropsWithoutRef } from 'react';

type PaginationItemProps = ComponentPropsWithoutRef<'li'>;

export const PaginationItem = (props: PaginationItemProps) => {
  return <li data-slot="pagination-item" {...props} />;
};
