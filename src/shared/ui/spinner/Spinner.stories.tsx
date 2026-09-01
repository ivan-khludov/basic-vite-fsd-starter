import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Shared/Spinner',
  component: Spinner
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-2">
        <Spinner />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </div>
    );
  }
};
