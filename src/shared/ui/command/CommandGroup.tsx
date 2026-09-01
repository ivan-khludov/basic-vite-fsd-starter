import { type ComponentPropsWithoutRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/shared/utils';

type CommandGroupProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;

export const CommandGroup = ({ className, ...rest }: CommandGroupProps) => {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground',
        className
      )}
      {...rest}
    />
  );
};
