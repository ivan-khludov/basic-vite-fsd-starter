import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from './RadioGroup';
import { RadioGroupItem } from './RadioGroupItem';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Shared/RadioGroup'
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="comfortable" aria-label="Spacing">
        <div className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="default" id="radio-default" />
          <label htmlFor="radio-default">Default</label>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="comfortable" id="radio-comfortable" />
          <label htmlFor="radio-comfortable">Comfortable</label>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="compact" id="radio-compact" />
          <label htmlFor="radio-compact">Compact</label>
        </div>
      </RadioGroup>
    );
  }
};
