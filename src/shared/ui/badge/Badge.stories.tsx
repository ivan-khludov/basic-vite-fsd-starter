import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Shared/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link'
      ]
    }
  },
  args: {
    children: 'Badge',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Badge {...args} variant="default">
          Default
        </Badge>
        <Badge {...args} variant="secondary">
          Secondary
        </Badge>
        <Badge {...args} variant="outline">
          Outline
        </Badge>
        <Badge {...args} variant="ghost">
          Ghost
        </Badge>
        <Badge {...args} variant="destructive">
          Destructive
        </Badge>
        <Badge {...args} variant="link">
          Link
        </Badge>
      </div>
    );
  }
};
