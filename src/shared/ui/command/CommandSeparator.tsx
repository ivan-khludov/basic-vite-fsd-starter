import { type ComponentPropsWithoutRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/shared/utils';

type CommandSeparatorProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
>;

export const CommandSeparator = ({
  className,
  ...rest
}: CommandSeparatorProps) => {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('-mx-1 h-px w-auto bg-border', className)}
      {...rest}
    />
  );
};
