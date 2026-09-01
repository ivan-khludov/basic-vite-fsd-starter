import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Popover } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverDescription } from './PopoverDescription';
import { PopoverHeader } from './PopoverHeader';
import { PopoverTitle } from './PopoverTitle';
import { PopoverTrigger } from './PopoverTrigger';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Shared/Popover'
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Popover title</PopoverTitle>
            <PopoverDescription>Popover description</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    );
  }
};
