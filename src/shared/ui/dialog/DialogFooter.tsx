import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  closeLabel?: string;
  showCloseButton?: boolean;
  className?: string;
  children?: ReactNode;
}

const DEFAULT_CLOSE_LABEL = 'Close';

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  (
    {
      closeLabel = DEFAULT_CLOSE_LABEL,
      showCloseButton = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="dialog-footer"
        className={cn(
          'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
          className
        )}
        {...rest}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close asChild>
            <Button variant="outline">{closeLabel}</Button>
          </DialogPrimitive.Close>
        )}
      </div>
    );
  }
);

DialogFooter.displayName = 'DialogFooter';
