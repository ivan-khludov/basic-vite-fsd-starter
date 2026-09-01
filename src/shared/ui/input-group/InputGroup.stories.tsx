import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputGroup } from './InputGroup';
import { InputGroupAddon } from './InputGroupAddon';
import { InputGroupButton } from './InputGroupButton';
import { InputGroupInput } from './InputGroupInput';
import { InputGroupText } from './InputGroupText';
import { InputGroupTextarea } from './InputGroupTextarea';

const meta: Meta<typeof InputGroup> = {
  title: 'Shared/InputGroup',
  component: InputGroup,
  argTypes: {
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-96 space-y-4">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Username" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton uiSize="icon-xs" aria-label="Search">
              ⌕
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
};

export const WithTextarea: Story = {
  render: () => {
    return (
      <div className="w-96">
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText>Message</InputGroupText>
          </InputGroupAddon>
          <InputGroupTextarea placeholder="Write something…" rows={3} />
        </InputGroup>
      </div>
    );
  }
};
