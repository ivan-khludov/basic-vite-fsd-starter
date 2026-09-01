import { type ComponentPropsWithoutRef } from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

type MenubarMenuProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu>;

export const MenubarMenu = (props: MenubarMenuProps) => {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
};

MenubarMenu.displayName = 'MenubarMenu';
