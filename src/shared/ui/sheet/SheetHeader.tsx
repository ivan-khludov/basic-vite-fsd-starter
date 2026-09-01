import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type SheetHeaderProps = ComponentPropsWithoutRef<'div'>;

export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="sheet-header"
        className={cn('flex flex-col gap-1.5 p-4', className)}
        {...rest}
      />
    );
  }
);

SheetHeader.displayName = 'SheetHeader';
