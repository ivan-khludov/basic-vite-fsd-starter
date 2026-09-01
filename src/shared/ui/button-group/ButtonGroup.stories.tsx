import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupSeparator } from './ButtonGroupSeparator';
import { ButtonGroupText } from './ButtonGroupText';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Shared/ButtonGroup',
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => {
    return (
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <Button variant="outline">Copy</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">Share</Button>
      </ButtonGroup>
    );
  }
};
