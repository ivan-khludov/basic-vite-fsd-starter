import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarGroupProps = ComponentPropsWithoutRef<'div'>;

export const SidebarGroup = ({ className, ...rest }: SidebarGroupProps) => {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...rest}
    />
  );
};
