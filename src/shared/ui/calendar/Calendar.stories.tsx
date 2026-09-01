import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DateRange } from 'react-day-picker';

import { Calendar } from './Calendar';

const CalendarSingleExample = (
  args: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect'
  >
) => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      {...args}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
};

const CalendarRangeExample = (
  args: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'numberOfMonths'
  >
) => {
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined
  });

  return (
    <Calendar
      {...args}
      mode="range"
      numberOfMonths={2}
      selected={selected}
      onSelect={setSelected}
    />
  );
};

const CalendarWeekNumbersExample = (
  args: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'showWeekNumber'
  >
) => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      {...args}
      mode="single"
      selected={selected}
      showWeekNumber
      onSelect={setSelected}
    />
  );
};

const meta = {
  title: 'Shared/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown']
    },
    showOutsideDays: {
      control: 'boolean'
    },
    showWeekNumber: {
      control: 'boolean'
    },
    buttonVariant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'secondary',
        'ghost',
        'destructive',
        'link'
      ]
    }
  },
  args: {
    showOutsideDays: true,
    captionLayout: 'label',
    buttonVariant: 'ghost'
  }
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <CalendarSingleExample {...args} />
};

export const Range: Story = {
  render: (args) => <CalendarRangeExample {...args} />
};

export const WeekNumbers: Story = {
  render: (args) => <CalendarWeekNumbersExample {...args} />
};
