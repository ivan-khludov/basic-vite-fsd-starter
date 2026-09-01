import { type ComponentPropsWithoutRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/shared/utils';

type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;

export const Command = ({ className, ...rest }: CommandProps) => {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground',
        className
      )}
      {...rest}
    />
  );
};
