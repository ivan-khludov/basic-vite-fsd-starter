import { type ComponentPropsWithoutRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

type DrawerProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>;

export const Drawer = (rest: DrawerProps) => {
  return <DrawerPrimitive.Root data-slot="drawer" {...rest} />;
};
