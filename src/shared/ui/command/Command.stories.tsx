import type { Meta, StoryObj } from '@storybook/react-vite';

import { Command } from './Command';
import { CommandEmpty } from './CommandEmpty';
import { CommandGroup } from './CommandGroup';
import { CommandInput } from './CommandInput';
import { CommandItem } from './CommandItem';
import { CommandList } from './CommandList';
import { CommandSeparator } from './CommandSeparator';
import { CommandShortcut } from './CommandShortcut';

const meta: Meta<typeof Command> = {
  component: Command,
  title: 'Shared/Command'
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => {
    return (
      <Command className="w-80 rounded-xl border shadow-md">
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              Calendar
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
            <CommandItem>Search</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }
};
