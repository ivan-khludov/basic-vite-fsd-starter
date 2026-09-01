import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Shared/Textarea',
  component: Textarea,
  argTypes: {
    uiSize: { control: 'select', options: ['md', 'lg'] },
    isDisabled: { control: 'boolean' },
    hasAutoFocus: { control: 'boolean' },
    isHidden: { control: 'boolean' },
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type something…'
  }
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid value'
  }
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: "You can't edit this"
  }
};
