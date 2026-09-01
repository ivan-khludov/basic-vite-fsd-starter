import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

type ContextMenuGroupProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Group
>;

export const ContextMenuGroup = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Group>,
  ContextMenuGroupProps
>((props, ref) => {
  return (
    <ContextMenuPrimitive.Group
      ref={ref}
      data-slot="context-menu-group"
      {...props}
    />
  );
});

ContextMenuGroup.displayName = 'ContextMenuGroup';
