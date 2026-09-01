import type { Meta, StoryObj } from '@storybook/react-vite';

import { ToggleGroup } from './ToggleGroup';
import { ToggleGroupItem } from './ToggleGroupItem';

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  title: 'Shared/ToggleGroup'
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => {
    return (
      <ToggleGroup type="single" defaultValue="center" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }
};
