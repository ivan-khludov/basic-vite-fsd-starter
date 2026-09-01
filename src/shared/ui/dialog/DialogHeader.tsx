import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dialog-header"
        className={cn('flex flex-col gap-2', className)}
        {...rest}
      />
    );
  }
);

DialogHeader.displayName = 'DialogHeader';
