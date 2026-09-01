import type { Meta, StoryObj } from '@storybook/react-vite';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Shared/Separator',
  component: Separator,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    decorative: { control: 'boolean' },
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => {
    return (
      <div className="w-80">
        <div className="text-sm text-muted-foreground">Above</div>
        <Separator {...args} className="my-3" />
        <div className="text-sm text-muted-foreground">Below</div>
      </div>
    );
  }
};

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => {
    return (
      <div className="w-80">
        <div className="text-sm text-muted-foreground">Above</div>
        <Separator {...args} className="my-3" />
        <div className="text-sm text-muted-foreground">Below</div>
      </div>
    );
  }
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => {
    return (
      <div className="flex h-10 items-center gap-3 text-sm">
        <span>Left</span>
        <Separator {...args} className="h-6" />
        <span>Right</span>
      </div>
    );
  }
};
