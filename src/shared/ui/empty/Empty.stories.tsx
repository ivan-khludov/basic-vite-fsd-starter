import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Empty } from './Empty';
import { EmptyContent } from './EmptyContent';
import { EmptyDescription } from './EmptyDescription';
import { EmptyHeader } from './EmptyHeader';
import { EmptyMedia } from './EmptyMedia';
import { EmptyTitle } from './EmptyTitle';

const meta: Meta<typeof Empty> = {
  title: 'Shared/Empty',
  component: Empty,
  argTypes: {
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-full max-w-xl">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">⌁</EmptyMedia>
            <EmptyTitle>No items yet</EmptyTitle>
            <EmptyDescription>
              Create your first item or learn more in <a href="#">the docs</a>.
            </EmptyDescription>
          </EmptyHeader>

          <EmptyContent>
            <Button>New item</Button>
            <Button variant="outline">Import</Button>
          </EmptyContent>
        </Empty>
      </div>
    );
  }
};
