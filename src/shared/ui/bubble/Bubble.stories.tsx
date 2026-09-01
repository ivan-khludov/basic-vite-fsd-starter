import type { Meta, StoryObj } from '@storybook/react-vite';

import { Bubble } from './Bubble';
import { BubbleContent } from './BubbleContent';
import { BubbleGroup } from './BubbleGroup';

const meta: Meta<typeof Bubble> = {
  component: Bubble,
  title: 'Shared/Bubble',
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'muted',
        'tinted',
        'outline',
        'ghost',
        'destructive'
      ]
    },
    align: { control: 'select', options: ['start', 'end'] }
  }
};

export default meta;

type Story = StoryObj<typeof Bubble>;

export const Default: Story = {
  render: () => {
    return (
      <BubbleGroup className="max-w-md">
        <Bubble>
          <BubbleContent>Hello from the left.</BubbleContent>
        </Bubble>
        <Bubble align="end" variant="secondary">
          <BubbleContent>And a reply from the right.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    );
  }
};
