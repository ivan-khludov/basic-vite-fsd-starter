import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/shared/ui/button';

import { Card } from './Card';
import { CardAction } from './CardAction';
import { CardContent } from './CardContent';
import { CardDescription } from './CardDescription';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardTitle } from './CardTitle';

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  argTypes: {
    size: { control: 'select', options: ['default', 'sm'] }
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => {
    return (
      <Card className="max-w-sm">
        <CardHeader className="border-b">
          <CardTitle>Card title</CardTitle>
          <CardDescription>Description text</CardDescription>
          <CardAction>
            <Button size="sm" variant="outline">
              Action
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">Card content</div>
        </CardContent>
        <CardFooter className="border-t">
          <Button size="sm">Primary</Button>
        </CardFooter>
      </Card>
    );
  }
};
