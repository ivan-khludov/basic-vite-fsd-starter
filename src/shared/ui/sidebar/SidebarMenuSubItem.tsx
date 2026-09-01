import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarMenuSubItemProps = ComponentPropsWithoutRef<'li'>;

export const SidebarMenuSubItem = ({
  className,
  ...rest
}: SidebarMenuSubItemProps) => {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('group/menu-sub-item relative', className)}
      {...rest}
    />
  );
};
