import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@/shared/ui/checkbox';
import { Input } from '@/shared/ui/input';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Shared/Label',
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text' },
    isHidden: { control: 'boolean' },
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Email'
  }
};

export const WithInput: Story = {
  render: () => {
    const id = 'storybook-label-input';

    return (
      <div className="flex w-64 flex-col gap-2">
        <Label htmlFor={id}>Email</Label>
        <Input id={id} type="email" placeholder="name@example.com" />
      </div>
    );
  }
};

export const WithCheckbox: Story = {
  render: () => {
    const id = 'storybook-label-checkbox';

    return (
      <Label htmlFor={id}>
        <Checkbox id={id} />
        Accept terms and conditions
      </Label>
    );
  }
};

export const Disabled: Story = {
  render: () => {
    const id = 'storybook-label-disabled';

    return (
      <div data-disabled="true" className="group flex w-64 flex-col gap-2">
        <Label htmlFor={id}>Email</Label>
        <Input id={id} type="email" placeholder="name@example.com" isDisabled />
      </div>
    );
  }
};
