import type { Meta, StoryObj } from '@storybook/react-vite';

import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Shared/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => {
    return (
      <Breadcrumb {...args}>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <a href="#" className="transition-colors hover:text-foreground">
              Home
            </a>
          </li>
          <li aria-hidden className="select-none">
            /
          </li>
          <li>
            <a href="#" className="transition-colors hover:text-foreground">
              Products
            </a>
          </li>
          <li aria-hidden className="select-none">
            /
          </li>
          <li aria-current="page" className="text-foreground">
            Details
          </li>
        </ol>
      </Breadcrumb>
    );
  }
};

export const WithCustomClassName: Story = {
  args: {
    className: 'rounded-md border bg-card p-3'
  },
  render: (args) => {
    return (
      <Breadcrumb {...args}>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <a href="#" className="transition-colors hover:text-foreground">
              Home
            </a>
          </li>
          <li aria-hidden className="select-none">
            /
          </li>
          <li aria-current="page" className="text-foreground">
            Current
          </li>
        </ol>
      </Breadcrumb>
    );
  }
};
