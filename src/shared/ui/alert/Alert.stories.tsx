import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircleAlertIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { Alert } from './Alert';
import { AlertAction } from './AlertAction';
import { AlertDescription } from './AlertDescription';
import { AlertTitle } from './AlertTitle';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Shared/Alert',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => {
    return (
      <Alert>
        <CircleAlertIcon />
        <AlertTitle>Unable to process your payment</AlertTitle>
        <AlertDescription>
          Please verify your billing information and try again.
        </AlertDescription>
        <AlertAction>
          <Button variant="outline" size="xs">
            Retry
          </Button>
        </AlertAction>
      </Alert>
    );
  }
};
