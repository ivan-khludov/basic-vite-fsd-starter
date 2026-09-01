import { type ComponentPropsWithoutRef } from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

type MenubarPortalProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Portal
>;

export const MenubarPortal = (props: MenubarPortalProps) => {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
};

MenubarPortal.displayName = 'MenubarPortal';
