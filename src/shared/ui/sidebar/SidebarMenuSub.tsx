import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarMenuSubProps = ComponentPropsWithoutRef<'ul'>;

export const SidebarMenuSub = ({ className, ...rest }: SidebarMenuSubProps) => {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden',
        className
      )}
      {...rest}
    />
  );
};
