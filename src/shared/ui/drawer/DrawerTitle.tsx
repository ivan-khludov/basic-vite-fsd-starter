import { type ComponentPropsWithoutRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/shared/utils';

type DrawerTitleProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>;

export const DrawerTitle = ({ className, ...rest }: DrawerTitleProps) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('font-medium text-foreground', className)}
      {...rest}
    />
  );
};
