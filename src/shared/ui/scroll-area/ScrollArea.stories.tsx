import type { Meta, StoryObj } from '@storybook/react-vite';

import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  title: 'Shared/ScrollArea'
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => {
    return (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <p className="text-sm">
            Tags, notes, and long lists stay inside this area so the page layout
            does not grow. Scroll to see more content below.
          </p>
          <p className="mt-4 text-sm">Item one</p>
          <p className="mt-4 text-sm">Item two</p>
          <p className="mt-4 text-sm">Item three</p>
          <p className="mt-4 text-sm">Item four</p>
          <p className="mt-4 text-sm">Item five</p>
          <p className="mt-4 text-sm">Item six</p>
          <p className="mt-4 text-sm">Item seven</p>
          <p className="mt-4 text-sm">Item eight</p>
          <p className="mt-4 text-sm">Item nine</p>
          <p className="mt-4 text-sm">Item ten</p>
        </div>
      </ScrollArea>
    );
  }
};
