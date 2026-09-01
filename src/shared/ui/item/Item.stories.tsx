import type { Meta, StoryObj } from '@storybook/react-vite';

import { Item } from './Item';
import { ItemContent } from './ItemContent';
import { ItemDescription } from './ItemDescription';
import { ItemGroup } from './ItemGroup';
import { ItemTitle } from './ItemTitle';

const meta: Meta<typeof Item> = {
  component: Item,
  title: 'Shared/Item',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted']
    },
    size: { control: 'select', options: ['default', 'sm', 'xs'] }
  }
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: () => {
    return (
      <ItemGroup className="max-w-md">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Inbox</ItemTitle>
            <ItemDescription>Messages from your team.</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Drafts</ItemTitle>
            <ItemDescription>
              Unsent messages you can finish later.
            </ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    );
  }
};
