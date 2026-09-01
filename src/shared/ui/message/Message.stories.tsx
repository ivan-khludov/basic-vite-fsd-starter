import type { Meta, StoryObj } from '@storybook/react-vite';

import { Message } from './Message';
import { MessageAvatar } from './MessageAvatar';
import { MessageContent } from './MessageContent';
import { MessageGroup } from './MessageGroup';
import { MessageHeader } from './MessageHeader';

const meta: Meta<typeof Message> = {
  component: Message,
  title: 'Shared/Message'
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Default: Story = {
  render: () => {
    return (
      <MessageGroup className="max-w-md">
        <Message>
          <MessageAvatar>A</MessageAvatar>
          <MessageContent>
            <MessageHeader>Ada</MessageHeader>
            <p>Hello there.</p>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageAvatar>B</MessageAvatar>
          <MessageContent>
            <MessageHeader>You</MessageHeader>
            <p>Hi Ada.</p>
          </MessageContent>
        </Message>
      </MessageGroup>
    );
  }
};
