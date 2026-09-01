import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

type ContextMenuRadioGroupProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioGroup
>;

export const ContextMenuRadioGroup = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.RadioGroup>,
  ContextMenuRadioGroupProps
>((props, ref) => {
  return (
    <ContextMenuPrimitive.RadioGroup
      ref={ref}
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
});

ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';
