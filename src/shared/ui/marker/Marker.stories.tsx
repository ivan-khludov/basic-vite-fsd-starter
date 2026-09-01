import type { Meta, StoryObj } from '@storybook/react-vite';

import { Marker } from './Marker';
import { MarkerContent } from './MarkerContent';

const meta: Meta<typeof Marker> = {
  component: Marker,
  title: 'Shared/Marker',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'separator', 'border']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Marker>;

export const Default: Story = {
  render: () => {
    return (
      <div className="max-w-sm">
        <Marker variant="separator">
          <MarkerContent>Today</MarkerContent>
        </Marker>
      </div>
    );
  }
};
