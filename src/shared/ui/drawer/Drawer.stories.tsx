import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Drawer } from './Drawer';
import { DrawerClose } from './DrawerClose';
import { DrawerContent } from './DrawerContent';
import { DrawerDescription } from './DrawerDescription';
import { DrawerFooter } from './DrawerFooter';
import { DrawerHeader } from './DrawerHeader';
import { DrawerTitle } from './DrawerTitle';
import { DrawerTrigger } from './DrawerTrigger';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Shared/Drawer'
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    return (
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer title</DrawerTitle>
            <DrawerDescription>Drawer description</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
};
