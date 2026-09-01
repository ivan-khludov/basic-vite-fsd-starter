import type { Meta, StoryObj } from '@storybook/react-vite';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Shared/Toggle',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg']
    },
    isDisabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Italic',
    'aria-label': 'Toggle italic',
    variant: 'default',
    size: 'default'
  }
};
