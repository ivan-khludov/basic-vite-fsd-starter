import type { Meta, StoryObj } from '@storybook/react-vite';

import { NativeSelect } from './NativeSelect';
import { NativeSelectOptGroup } from './NativeSelectOptGroup';
import { NativeSelectOption } from './NativeSelectOption';

const meta: Meta<typeof NativeSelect> = {
  component: NativeSelect,
  title: 'Shared/NativeSelect',
  argTypes: {
    uiSize: {
      control: 'select',
      options: ['default', 'sm']
    },
    isDisabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  render: () => {
    return (
      <NativeSelect aria-label="Fruit" defaultValue="apple">
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOption value="other">Other</NativeSelectOption>
      </NativeSelect>
    );
  }
};
