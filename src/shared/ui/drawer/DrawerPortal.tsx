import { type ComponentPropsWithoutRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

type DrawerPortalProps = ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Portal
>;

export const DrawerPortal = (rest: DrawerPortalProps) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...rest} />;
};
