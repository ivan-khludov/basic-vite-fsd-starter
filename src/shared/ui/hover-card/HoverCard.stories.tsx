import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { HoverCard } from './HoverCard';
import { HoverCardContent } from './HoverCardContent';
import { HoverCardTrigger } from './HoverCardTrigger';

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  title: 'Shared/HoverCard'
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          Hover card content with extra context.
        </HoverCardContent>
      </HoverCard>
    );
  }
};
