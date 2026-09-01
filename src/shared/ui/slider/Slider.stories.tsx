import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Shared/Slider',
  argTypes: {
    isDisabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    'aria-label': 'Volume'
  }
};
