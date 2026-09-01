import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './Select';
import { SelectContent } from './SelectContent';
import { SelectGroup } from './SelectGroup';
import { SelectItem } from './SelectItem';
import { SelectLabel } from './SelectLabel';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';

const meta: Meta<typeof Select> = {
  title: 'Shared/Select',
  component: Select
};

export default meta;

type Story = StoryObj<typeof Select>;

const ControlledSelectStory = () => {
  const [value, setValue] = useState('apple');

  const handleValueChange = (nextValue: string) => {
    setValue(nextValue);
  };

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const Default: Story = {
  render: () => {
    return <ControlledSelectStory />;
  }
};
