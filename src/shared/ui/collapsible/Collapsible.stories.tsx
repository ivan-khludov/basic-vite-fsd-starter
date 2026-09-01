import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Collapsible } from './Collapsible';
import { CollapsibleContent } from './CollapsibleContent';
import { CollapsibleTrigger } from './CollapsibleTrigger';

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: 'Shared/Collapsible'
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    return (
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="outline">Toggle</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p className="pt-2 text-sm text-muted-foreground">
            Collapsible content is visible when open.
          </p>
        </CollapsibleContent>
      </Collapsible>
    );
  }
};
