import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as SheetPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SheetDescriptionProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Description
>;

export const SheetDescription = forwardRef<
  ComponentRef<typeof SheetPrimitive.Description>,
  SheetDescriptionProps
>(({ className, ...rest }, ref) => {
  return (
    <SheetPrimitive.Description
      ref={ref}
      data-slot="sheet-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
});

SheetDescription.displayName = 'SheetDescription';
