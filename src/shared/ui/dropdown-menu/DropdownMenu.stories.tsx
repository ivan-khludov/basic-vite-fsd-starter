import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem';
import { DropdownMenuContent } from './DropdownMenuContent';
import { DropdownMenuGroup } from './DropdownMenuGroup';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuLabel } from './DropdownMenuLabel';
import { DropdownMenuSeparator } from './DropdownMenuSeparator';
import { DropdownMenuTrigger } from './DropdownMenuTrigger';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Shared/DropdownMenu',
  component: DropdownMenu
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

const ControlledDropdownMenuStory = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckedChange = (nextChecked: boolean) => {
    setIsChecked(nextChecked);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem inset>Settings</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          isChecked={isChecked}
          onCheckedChange={handleCheckedChange}
        >
          Keep open
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Default: Story = {
  render: () => {
    return <ControlledDropdownMenuStory />;
  }
};
