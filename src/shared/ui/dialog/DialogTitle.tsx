import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

export const DialogTitle = forwardRef<
  ComponentRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...rest }, ref) => {
  return (
    <DialogPrimitive.Title
      ref={ref}
      data-slot="dialog-title"
      className={cn('leading-none font-medium', className)}
      {...rest}
    />
  );
});

DialogTitle.displayName = 'DialogTitle';
