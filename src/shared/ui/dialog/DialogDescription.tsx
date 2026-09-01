import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export const DialogDescription = forwardRef<
  ComponentRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...rest }, ref) => {
  return (
    <DialogPrimitive.Description
      ref={ref}
      data-slot="dialog-description"
      className={cn(
        'text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
        className
      )}
      {...rest}
    />
  );
});

DialogDescription.displayName = 'DialogDescription';
