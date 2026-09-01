import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type DropdownMenuShortcutProps = ComponentPropsWithoutRef<'span'>;

export const DropdownMenuShortcut = forwardRef<
  HTMLSpanElement,
  DropdownMenuShortcutProps
>(({ className, ...rest }, ref) => {
  return (
    <span
      ref={ref}
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground',
        className
      )}
      {...rest}
    />
  );
});

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
