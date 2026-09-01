import type { Meta, StoryObj } from '@storybook/react-vite';

import { MessageScroller } from './MessageScroller';
import { MessageScrollerButton } from './MessageScrollerButton';
import { MessageScrollerContent } from './MessageScrollerContent';
import { MessageScrollerItem } from './MessageScrollerItem';
import { MessageScrollerProvider } from './MessageScrollerProvider';
import { MessageScrollerViewport } from './MessageScrollerViewport';

const meta: Meta<typeof MessageScroller> = {
  component: MessageScroller,
  title: 'Shared/MessageScroller'
};

export default meta;

type Story = StoryObj<typeof MessageScroller>;

export const Default: Story = {
  render: () => {
    return (
      <div className="h-64 max-w-md rounded-lg border">
        <MessageScrollerProvider>
          <MessageScroller>
            <MessageScrollerViewport>
              <MessageScrollerContent>
                <MessageScrollerItem>Message one</MessageScrollerItem>
                <MessageScrollerItem>Message two</MessageScrollerItem>
                <MessageScrollerItem scrollAnchor>
                  Message three
                </MessageScrollerItem>
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      </div>
    );
  }
};
