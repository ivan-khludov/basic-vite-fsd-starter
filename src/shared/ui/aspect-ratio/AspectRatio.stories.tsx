import type { Meta, StoryObj } from '@storybook/react-vite';

import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Shared/AspectRatio',
  component: AspectRatio,
  args: {
    ratio: 16 / 9
  }
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="w-64 rounded-md border p-3">
        <AspectRatio {...args}>
          <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
            16:9
          </div>
        </AspectRatio>
      </div>
    );
  }
};
