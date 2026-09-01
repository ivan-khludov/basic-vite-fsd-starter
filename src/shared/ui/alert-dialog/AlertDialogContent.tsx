import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { tv, type VariantProps } from 'tailwind-variants';

import { AlertDialogOverlay } from './AlertDialogOverlay';
import { AlertDialogPortal } from './AlertDialogPortal';

const alertDialogContentVariants = tv({
  base: [
    'group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-popover p-6 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none',
    'data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95'
  ],
  variants: {
    size: { default: 'max-w-xs sm:max-w-lg', sm: 'max-w-xs' }
  },
  defaultVariants: { size: 'default' }
});

type AlertDialogContentVariants = VariantProps<
  typeof alertDialogContentVariants
>;

type AlertDialogContentProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> &
  AlertDialogContentVariants;

export const AlertDialogContent = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(({ size = 'default', className, ...rest }, ref) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        data-slot="alert-dialog-content"
        data-size={size}
        className={alertDialogContentVariants({ size, className })}
        {...rest}
      />
    </AlertDialogPortal>
  );
});

AlertDialogContent.displayName = 'AlertDialogContent';
