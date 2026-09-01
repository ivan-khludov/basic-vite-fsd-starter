import type { Meta, StoryObj } from '@storybook/react-vite';

import { Combobox } from './Combobox';
import { ComboboxContent } from './ComboboxContent';
import { ComboboxEmpty } from './ComboboxEmpty';
import { ComboboxInput } from './ComboboxInput';
import { ComboboxItem } from './ComboboxItem';
import { ComboboxList } from './ComboboxList';

const fruits = ['Apple', 'Banana', 'Orange', 'Grape'] as const;

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: 'Shared/Combobox'
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: () => {
    return (
      <Combobox items={[...fruits]}>
        <ComboboxInput placeholder="Select a fruit" />
        <ComboboxContent>
          <ComboboxEmpty>No fruits found.</ComboboxEmpty>
          <ComboboxList>
            <ComboboxItem value="Apple">Apple</ComboboxItem>
            <ComboboxItem value="Banana">Banana</ComboboxItem>
            <ComboboxItem value="Orange">Orange</ComboboxItem>
            <ComboboxItem value="Grape">Grape</ComboboxItem>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  }
};
