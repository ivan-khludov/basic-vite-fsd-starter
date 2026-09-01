import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarMenuItemProps = ComponentPropsWithoutRef<'li'>;

export const SidebarMenuItem = ({
  className,
  ...rest
}: SidebarMenuItemProps) => {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item relative', className)}
      {...rest}
    />
  );
};
