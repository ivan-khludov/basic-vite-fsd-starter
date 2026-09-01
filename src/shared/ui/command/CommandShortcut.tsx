import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type CommandShortcutProps = ComponentPropsWithoutRef<'span'>;

export const CommandShortcut = ({
  className,
  ...rest
}: CommandShortcutProps) => {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground',
        className
      )}
      {...rest}
    />
  );
};
