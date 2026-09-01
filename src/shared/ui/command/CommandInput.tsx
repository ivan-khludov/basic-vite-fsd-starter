import { type ComponentPropsWithoutRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { InputGroup, InputGroupAddon } from '@/shared/ui/input-group';
import { cn } from '@/shared/utils';

type CommandInputProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;

export const CommandInput = ({ className, ...rest }: CommandInputProps) => {
  return (
    <div data-slot="command-input-wrapper" className="p-1 pb-0">
      <InputGroup className="h-8! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            'w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...rest}
        />
        <InputGroupAddon>
          <SearchIcon className="size-4 shrink-0 opacity-50" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
