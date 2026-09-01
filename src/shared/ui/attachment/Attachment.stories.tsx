import type { Meta, StoryObj } from '@storybook/react-vite';

import { Attachment } from './Attachment';
import { AttachmentContent } from './AttachmentContent';
import { AttachmentDescription } from './AttachmentDescription';
import { AttachmentMedia } from './AttachmentMedia';
import { AttachmentTitle } from './AttachmentTitle';

const meta: Meta<typeof Attachment> = {
  component: Attachment,
  title: 'Shared/Attachment',
  argTypes: {
    size: { control: 'select', options: ['default', 'sm', 'xs'] },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Attachment>;

export const Default: Story = {
  render: () => {
    return (
      <Attachment>
        <AttachmentMedia>📄</AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>report.pdf</AttachmentTitle>
          <AttachmentDescription>128 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    );
  }
};
