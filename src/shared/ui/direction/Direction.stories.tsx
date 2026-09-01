import type { Meta, StoryObj } from '@storybook/react-vite';

import { DirectionProvider } from './DirectionProvider';

const meta: Meta<typeof DirectionProvider> = {
  component: DirectionProvider,
  title: 'Shared/Direction'
};

export default meta;

type Story = StoryObj<typeof DirectionProvider>;

export const Default: Story = {
  render: () => {
    return (
      <DirectionProvider dir="ltr">
        <p className="text-sm">
          Left-to-right content inside DirectionProvider.
        </p>
      </DirectionProvider>
    );
  }
};
