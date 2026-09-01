import { type ComponentPropsWithoutRef } from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

type ContextMenuSubProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Sub
>;

export const ContextMenuSub = (props: ContextMenuSubProps) => {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
};

ContextMenuSub.displayName = 'ContextMenuSub';
