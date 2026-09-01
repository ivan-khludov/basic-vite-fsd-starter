import { type ComponentPropsWithoutRef } from 'react';

import { Separator } from '@/shared/ui/separator';
import { cn } from '@/shared/utils';

type SidebarSeparatorProps = ComponentPropsWithoutRef<typeof Separator>;

export const SidebarSeparator = ({
  className,
  ...rest
}: SidebarSeparatorProps) => {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('mx-2 w-auto bg-sidebar-border', className)}
      {...rest}
    />
  );
};
