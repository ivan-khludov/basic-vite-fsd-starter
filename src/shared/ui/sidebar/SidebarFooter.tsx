import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarFooterProps = ComponentPropsWithoutRef<'div'>;

export const SidebarFooter = ({ className, ...rest }: SidebarFooterProps) => {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...rest}
    />
  );
};
