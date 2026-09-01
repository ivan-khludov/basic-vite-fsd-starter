import { type ComponentPropsWithoutRef } from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

type MenubarSubProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Sub>;

export const MenubarSub = (props: MenubarSubProps) => {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
};

MenubarSub.displayName = 'MenubarSub';
