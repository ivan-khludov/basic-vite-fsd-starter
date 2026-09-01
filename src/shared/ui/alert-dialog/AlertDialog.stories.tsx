import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TriangleAlertIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { AlertDialog } from './AlertDialog';
import { AlertDialogAction } from './AlertDialogAction';
import { AlertDialogCancel } from './AlertDialogCancel';
import { AlertDialogContent } from './AlertDialogContent';
import { AlertDialogDescription } from './AlertDialogDescription';
import { AlertDialogFooter } from './AlertDialogFooter';
import { AlertDialogHeader } from './AlertDialogHeader';
import { AlertDialogMedia } from './AlertDialogMedia';
import { AlertDialogTitle } from './AlertDialogTitle';
import { AlertDialogTrigger } from './AlertDialogTrigger';

const meta: Meta<typeof AlertDialogContent> = {
  component: AlertDialogContent,
  title: 'Shared/AlertDialog',
  argTypes: {
    size: { control: 'select', options: ['default', 'sm'] }
  }
};

export default meta;

type Story = StoryObj<typeof AlertDialogContent>;

const ControlledAlertDialogStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={handleOpen}>
          Open alert dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <TriangleAlertIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const Default: Story = {
  render: () => {
    return <ControlledAlertDialogStory />;
  }
};
