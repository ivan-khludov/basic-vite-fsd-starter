import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SheetFooterProps = ComponentPropsWithoutRef<'div'>;

export const SheetFooter = forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="sheet-footer"
        className={cn('mt-auto flex flex-col gap-2 p-4', className)}
        {...rest}
      />
    );
  }
);

SheetFooter.displayName = 'SheetFooter';
