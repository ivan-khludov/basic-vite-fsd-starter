import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarContentProps = ComponentPropsWithoutRef<'div'>;

export const SidebarContent = ({ className, ...rest }: SidebarContentProps) => {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'no-scrollbar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className
      )}
      {...rest}
    />
  );
};
