import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from './Tabs';
import { TabsContent } from './TabsContent';
import { TabsList } from './TabsList';
import { TabsTrigger } from './TabsTrigger';

const meta: Meta<typeof TabsList> = {
  component: TabsList,
  title: 'Shared/Tabs',
  argTypes: {
    variant: { control: 'select', options: ['default', 'line'] }
  }
};

export default meta;

type Story = StoryObj<typeof TabsList>;

export const Default: Story = {
  render: () => {
    return (
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    );
  }
};
