import { type ComponentPropsWithoutRef } from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

type ContextMenuProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Root
>;

export const ContextMenu = (props: ContextMenuProps) => {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
};

ContextMenu.displayName = 'ContextMenu';
