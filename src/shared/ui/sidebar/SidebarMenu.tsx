import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarMenuProps = ComponentPropsWithoutRef<'ul'>;

export const SidebarMenu = ({ className, ...rest }: SidebarMenuProps) => {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...rest}
    />
  );
};
