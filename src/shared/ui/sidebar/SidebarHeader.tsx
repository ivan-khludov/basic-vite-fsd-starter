import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarHeaderProps = ComponentPropsWithoutRef<'div'>;

export const SidebarHeader = ({ className, ...rest }: SidebarHeaderProps) => {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...rest}
    />
  );
};
