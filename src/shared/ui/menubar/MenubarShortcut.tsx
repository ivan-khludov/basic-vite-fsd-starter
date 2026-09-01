import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type MenubarShortcutProps = ComponentPropsWithoutRef<'span'>;

export const MenubarShortcut = forwardRef<
  HTMLSpanElement,
  MenubarShortcutProps
>(({ className, ...rest }, ref) => {
  return (
    <span
      ref={ref}
      data-slot="menubar-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground',
        className
      )}
      {...rest}
    />
  );
});

MenubarShortcut.displayName = 'MenubarShortcut';
