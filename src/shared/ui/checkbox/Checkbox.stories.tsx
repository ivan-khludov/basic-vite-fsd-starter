import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Shared/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isHidden: { control: 'boolean' },
    hasAutoFocus: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    defaultChecked: false
  }
};

export const Checked: Story = {
  args: {
    defaultChecked: true
  }
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultChecked: true
  }
};

export const WithLabel: Story = {
  render: () => {
    const id = 'storybook-checkbox';

    return (
      <div className="flex items-center gap-2">
        <Checkbox id={id} />
        <label htmlFor={id} className="text-sm leading-none">
          Accept terms and conditions
        </label>
      </div>
    );
  }
};
