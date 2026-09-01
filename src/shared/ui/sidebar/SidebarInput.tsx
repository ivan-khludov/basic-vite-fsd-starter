import { type ComponentPropsWithoutRef } from 'react';

import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';

type SidebarInputProps = ComponentPropsWithoutRef<typeof Input>;

export const SidebarInput = ({ className, ...rest }: SidebarInputProps) => {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('h-8 w-full bg-background shadow-none', className)}
      {...rest}
    />
  );
};
