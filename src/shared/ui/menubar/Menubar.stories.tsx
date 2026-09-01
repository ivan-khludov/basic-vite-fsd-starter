import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Menubar } from './Menubar';
import { MenubarCheckboxItem } from './MenubarCheckboxItem';
import { MenubarContent } from './MenubarContent';
import { MenubarItem } from './MenubarItem';
import { MenubarMenu } from './MenubarMenu';
import { MenubarSeparator } from './MenubarSeparator';
import { MenubarShortcut } from './MenubarShortcut';
import { MenubarTrigger } from './MenubarTrigger';

const meta: Meta<typeof Menubar> = {
  component: Menubar,
  title: 'Shared/Menubar'
};

export default meta;

type Story = StoryObj<typeof Menubar>;

const DefaultMenubarStory = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckedChange = (nextChecked: boolean) => {
    setIsChecked(nextChecked);
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem
            isChecked={isChecked}
            onCheckedChange={handleCheckedChange}
          >
            Show bookmarks
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Quit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export const Default: Story = {
  render: () => {
    return <DefaultMenubarStory />;
  }
};
