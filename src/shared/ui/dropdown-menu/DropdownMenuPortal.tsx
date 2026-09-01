import { type ComponentPropsWithoutRef } from 'react';

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

type DropdownMenuPortalProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Portal
>;

export const DropdownMenuPortal = (props: DropdownMenuPortalProps) => {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
};

DropdownMenuPortal.displayName = 'DropdownMenuPortal';
