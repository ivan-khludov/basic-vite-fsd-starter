import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type DrawerHeaderProps = ComponentPropsWithoutRef<'div'>;

export const DrawerHeader = ({ className, ...rest }: DrawerHeaderProps) => {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...rest}
    />
  );
};
