import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

type MenubarRadioGroupProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioGroup
>;

export const MenubarRadioGroup = forwardRef<
  ComponentRef<typeof MenubarPrimitive.RadioGroup>,
  MenubarRadioGroupProps
>((props, ref) => {
  return (
    <MenubarPrimitive.RadioGroup
      ref={ref}
      data-slot="menubar-radio-group"
      {...props}
    />
  );
});

MenubarRadioGroup.displayName = 'MenubarRadioGroup';
