import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { ContextMenu as ContextMenuPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

interface ContextMenuLabelProps extends ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Label
> {
  inset?: boolean;
}

export const ContextMenuLabel = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ inset, className, ...rest }, ref) => {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-xs font-medium text-muted-foreground data-inset:pl-8',
        className
      )}
      {...rest}
    />
  );
});

ContextMenuLabel.displayName = 'ContextMenuLabel';
