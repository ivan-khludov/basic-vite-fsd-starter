import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

type DropdownMenuGroupProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Group
>;

export const DropdownMenuGroup = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Group>,
  DropdownMenuGroupProps
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.Group
      ref={ref}
      data-slot="dropdown-menu-group"
      {...props}
    />
  );
});

DropdownMenuGroup.displayName = 'DropdownMenuGroup';
