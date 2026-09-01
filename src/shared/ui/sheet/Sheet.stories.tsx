import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Sheet } from './Sheet';
import { SheetContent } from './SheetContent';
import { SheetDescription } from './SheetDescription';
import { SheetFooter } from './SheetFooter';
import { SheetHeader } from './SheetHeader';
import { SheetTitle } from './SheetTitle';
import { SheetTrigger } from './SheetTrigger';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  title: 'Shared/Sheet'
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }
};
