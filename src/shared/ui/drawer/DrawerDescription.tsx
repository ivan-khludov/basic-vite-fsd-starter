import { type ComponentPropsWithoutRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/shared/utils';

type DrawerDescriptionProps = ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Description
>;

export const DrawerDescription = ({
  className,
  ...rest
}: DrawerDescriptionProps) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
};
