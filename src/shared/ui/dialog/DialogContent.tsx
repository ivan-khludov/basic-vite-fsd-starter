import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { XIcon } from 'lucide-react';
import { Dialog as DialogPrimitive } from 'radix-ui';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

import { DialogOverlay } from './DialogOverlay';
import { DialogPortal } from './DialogPortal';

type DialogContentProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  closeLabel?: string;
  showCloseButton?: boolean;
};

const DEFAULT_CLOSE_LABEL = 'Close';

export const DialogContent = forwardRef<
  ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      closeLabel = DEFAULT_CLOSE_LABEL,
      showCloseButton = true,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          data-slot="dialog-content"
          className={cn(
            'fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-background p-6 text-sm ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-md data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
            className
          )}
          {...rest}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close data-slot="dialog-close" asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-4 right-4"
              >
                <XIcon />
                <span className="sr-only">{closeLabel}</span>
              </Button>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  }
);

DialogContent.displayName = 'DialogContent';
