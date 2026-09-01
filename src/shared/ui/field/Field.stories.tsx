import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '@/shared/ui/input';

import { Field } from './Field';
import { FieldContent } from './FieldContent';
import { FieldDescription } from './FieldDescription';
import { FieldLabel } from './FieldLabel';

const meta: Meta<typeof Field> = {
  component: Field,
  title: 'Shared/Field',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="story-email">Email</FieldLabel>
      <FieldContent>
        <Input id="story-email" type="email" placeholder="you@example.com" />
        <FieldDescription>We will not share this address.</FieldDescription>
      </FieldContent>
    </Field>
  )
};
