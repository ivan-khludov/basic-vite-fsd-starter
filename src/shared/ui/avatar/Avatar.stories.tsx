import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';
import { AvatarFallback } from './AvatarFallback';
import { AvatarImage } from './AvatarImage';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Shared/Avatar'
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  }
};
