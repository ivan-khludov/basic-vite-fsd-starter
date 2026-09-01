import { type ComponentPropsWithoutRef } from 'react';

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

type DropdownMenuSubProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Sub
>;

export const DropdownMenuSub = (props: DropdownMenuSubProps) => {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
};

DropdownMenuSub.displayName = 'DropdownMenuSub';
