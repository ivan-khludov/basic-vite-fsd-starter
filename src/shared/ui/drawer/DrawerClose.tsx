import { type ComponentPropsWithoutRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

type DrawerCloseProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>;

export const DrawerClose = (rest: DrawerCloseProps) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...rest} />;
};
