import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';

type DropdownMenuRadioGroupProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioGroup
>;

export const DropdownMenuRadioGroup = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.RadioGroup>,
  DropdownMenuRadioGroupProps
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.RadioGroup
      ref={ref}
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
});

DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup';
