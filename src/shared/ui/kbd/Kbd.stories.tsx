import type { Meta, StoryObj } from '@storybook/react-vite';

import { Kbd } from './Kbd';
import { KbdGroup } from './KbdGroup';

const meta: Meta<typeof Kbd> = {
  component: Kbd,
  title: 'Shared/Kbd'
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => {
    return (
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    );
  }
};
