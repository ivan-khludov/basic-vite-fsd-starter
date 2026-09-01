import { type ComponentPropsWithoutRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/shared/utils';

type CommandListProps = ComponentPropsWithoutRef<typeof CommandPrimitive.List>;

export const CommandList = ({ className, ...rest }: CommandListProps) => {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none',
        className
      )}
      {...rest}
    />
  );
};
