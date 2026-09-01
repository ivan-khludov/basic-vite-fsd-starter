import { type ComponentPropsWithoutRef } from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type AlertDialogOverlayProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>;

export const AlertDialogOverlay = ({
  className,
  ...rest
}: AlertDialogOverlayProps) => {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
        className
      )}
      {...rest}
    />
  );
};
