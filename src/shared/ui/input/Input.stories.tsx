import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Shared/Input',
  tags: ['autodocs'],
  argTypes: {
    uiSize: {
      control: 'select',
      options: ['md', 'lg']
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'file']
    },
    isDisabled: { control: 'boolean' },
    isHidden: { control: 'boolean' },
    hasAutoFocus: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    uiSize: 'md',
    type: 'text',
    placeholder: 'Type here…',
    defaultValue: 'Hello'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="grid max-w-sm gap-3">
      <Input uiSize="md" placeholder="md" />
      <Input uiSize="lg" placeholder="lg" />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    isDisabled: true
  }
};

export const Invalid: Story = {
  render: () => (
    <div className="grid max-w-sm gap-2">
      <Input aria-invalid="true" placeholder="Invalid (aria-invalid)" />
      <div className="text-sm text-destructive">This field is required.</div>
    </div>
  )
};

export const File: Story = {
  args: {
    type: 'file'
  }
};
