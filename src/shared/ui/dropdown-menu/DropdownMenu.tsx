import { type ComponentPropsWithoutRef } from 'react';

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

type DropdownMenuProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Root
>;

export const DropdownMenu = (props: DropdownMenuProps) => {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};

DropdownMenu.displayName = 'DropdownMenu';
