import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Dialog } from './Dialog';
import { DialogContent } from './DialogContent';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTitle } from './DialogTitle';
import { DialogTrigger } from './DialogTrigger';

const meta: Meta<typeof Dialog> = {
  title: 'Shared/Dialog',
  component: Dialog
};

export default meta;

type Story = StoryObj<typeof Dialog>;

const ControlledDialogStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button onClick={handleOpen}>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
        </DialogHeader>
        <DialogFooter closeLabel="Close" showCloseButton>
          <Button variant="outline">Secondary</Button>
          <Button>Primary</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const Default: Story = {
  render: () => {
    return <ControlledDialogStory />;
  }
};
