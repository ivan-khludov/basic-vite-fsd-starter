import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Shared/Switch',
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm']
    },
    isDisabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    size: 'default',
    'aria-label': 'Notifications'
  }
};
