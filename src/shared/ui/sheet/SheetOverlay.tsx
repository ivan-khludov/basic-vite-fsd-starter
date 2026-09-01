import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as SheetPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SheetOverlayProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Overlay
>;

export const SheetOverlay = forwardRef<
  ComponentRef<typeof SheetPrimitive.Overlay>,
  SheetOverlayProps
>(({ className, ...rest }, ref) => {
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      data-slot="sheet-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
        className
      )}
      {...rest}
    />
  );
});

SheetOverlay.displayName = 'SheetOverlay';
