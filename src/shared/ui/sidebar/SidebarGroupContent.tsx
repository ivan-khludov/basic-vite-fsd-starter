import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SidebarGroupContentProps = ComponentPropsWithoutRef<'div'>;

export const SidebarGroupContent = ({
  className,
  ...rest
}: SidebarGroupContentProps) => {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...rest}
    />
  );
};
