import { type ComponentPropsWithoutRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/shared/utils';

type DrawerOverlayProps = ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Overlay
>;

export const DrawerOverlay = ({ className, ...rest }: DrawerOverlayProps) => {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
        className
      )}
      {...rest}
    />
  );
};
