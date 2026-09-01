import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { XIcon } from 'lucide-react';
import { Dialog as SheetPrimitive } from 'radix-ui';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

import { SheetOverlay } from './SheetOverlay';
import { SheetPortal } from './SheetPortal';

type SheetContentProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
  closeLabel?: string;
  showCloseButton?: boolean;
};

const DEFAULT_CLOSE_LABEL = 'Close';

export const SheetContent = forwardRef<
  ComponentRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = 'right',
      closeLabel = DEFAULT_CLOSE_LABEL,
      showCloseButton = true,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
          ref={ref}
          data-slot="sheet-content"
          data-side={side}
          className={cn(
            'fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10',
            className
          )}
          {...rest}
        >
          {children}
          {showCloseButton && (
            <SheetPrimitive.Close data-slot="sheet-close" asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-4 right-4"
              >
                <XIcon />
                <span className="sr-only">{closeLabel}</span>
              </Button>
            </SheetPrimitive.Close>
          )}
        </SheetPrimitive.Content>
      </SheetPortal>
    );
  }
);

SheetContent.displayName = 'SheetContent';
