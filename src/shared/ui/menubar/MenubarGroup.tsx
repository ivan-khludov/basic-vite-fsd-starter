import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

type MenubarGroupProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Group
>;

export const MenubarGroup = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Group>,
  MenubarGroupProps
>((props, ref) => {
  return (
    <MenubarPrimitive.Group ref={ref} data-slot="menubar-group" {...props} />
  );
});

MenubarGroup.displayName = 'MenubarGroup';
