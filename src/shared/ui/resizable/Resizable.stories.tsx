import type { Meta, StoryObj } from '@storybook/react-vite';

import { ResizableHandle } from './ResizableHandle';
import { ResizablePanel } from './ResizablePanel';
import { ResizablePanelGroup } from './ResizablePanelGroup';

const meta: Meta<typeof ResizablePanelGroup> = {
  component: ResizablePanelGroup,
  title: 'Shared/Resizable'
};

export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: () => {
    return (
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize="50">
          <div className="flex h-full items-center justify-center p-6">
            Left
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50">
          <div className="flex h-full items-center justify-center p-6">
            Right
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
};
