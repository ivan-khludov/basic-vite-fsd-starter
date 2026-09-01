import { type ComponentPropsWithoutRef } from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

type ContextMenuPortalProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Portal
>;

export const ContextMenuPortal = (props: ContextMenuPortalProps) => {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
};

ContextMenuPortal.displayName = 'ContextMenuPortal';
