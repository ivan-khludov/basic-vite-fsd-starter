import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Shared/Progress',
  component: Progress,
  args: {
    value: 35
  }
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

const ControlledProgressStory = () => {
  const [value, setValue] = useState(35);

  const handleIncrease = () => {
    setValue((prev) => Math.min(100, prev + 10));
  };

  const handleDecrease = () => {
    setValue((prev) => Math.max(0, prev - 10));
  };

  return (
    <div className="space-y-3">
      <Progress value={value} />
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={handleDecrease}>
          -10
        </Button>
        <Button size="sm" onClick={handleIncrease}>
          +10
        </Button>
        <span className="text-sm text-muted-foreground tabular-nums">
          {value}%
        </span>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => {
    return <ControlledProgressStory />;
  }
};
