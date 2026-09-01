import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ContextMenuShortcutProps = ComponentPropsWithoutRef<'span'>;

export const ContextMenuShortcut = forwardRef<
  HTMLSpanElement,
  ContextMenuShortcutProps
>(({ className, ...rest }, ref) => {
  return (
    <span
      ref={ref}
      data-slot="context-menu-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground',
        className
      )}
      {...rest}
    />
  );
});

ContextMenuShortcut.displayName = 'ContextMenuShortcut';
