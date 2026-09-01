import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Shared/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'secondary',
        'ghost',
        'destructive',
        'link'
      ]
    },
    size: {
      control: 'select',
      options: [
        'default',
        'xs',
        'sm',
        'lg',
        'icon',
        'icon-xs',
        'icon-sm',
        'icon-lg'
      ]
    },
    isLoading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isHidden: { control: 'boolean' },
    hasAutoFocus: { control: 'boolean' },
    asChild: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  }
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="default">Default</Button>
      <Button size="lg">LG</Button>
      <Button size="icon" aria-label="Icon button">
        +
      </Button>
    </div>
  )
};

export const Loading: Story = {
  args: {
    children: 'Button',
    isLoading: true
  }
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    isDisabled: true
  }
};

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="#">Link as child</a>
    </Button>
  )
};
