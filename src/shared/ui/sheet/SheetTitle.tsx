import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Dialog as SheetPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SheetTitleProps = ComponentPropsWithoutRef<typeof SheetPrimitive.Title>;

export const SheetTitle = forwardRef<
  ComponentRef<typeof SheetPrimitive.Title>,
  SheetTitleProps
>(({ className, ...rest }, ref) => {
  return (
    <SheetPrimitive.Title
      ref={ref}
      data-slot="sheet-title"
      className={cn('font-medium text-foreground', className)}
      {...rest}
    />
  );
});

SheetTitle.displayName = 'SheetTitle';
