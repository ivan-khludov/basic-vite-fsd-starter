import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { ContextMenu } from './ContextMenu';
import { ContextMenuCheckboxItem } from './ContextMenuCheckboxItem';
import { ContextMenuContent } from './ContextMenuContent';
import { ContextMenuItem } from './ContextMenuItem';
import { ContextMenuSeparator } from './ContextMenuSeparator';
import { ContextMenuShortcut } from './ContextMenuShortcut';
import { ContextMenuTrigger } from './ContextMenuTrigger';

const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu,
  title: 'Shared/ContextMenu'
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

const DefaultContextMenuStory = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckedChange = (nextChecked: boolean) => {
    setIsChecked(nextChecked);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          isChecked={isChecked}
          onCheckedChange={handleCheckedChange}
        >
          Show bookmarks bar
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const Default: Story = {
  render: () => {
    return <DefaultContextMenuStory />;
  }
};
