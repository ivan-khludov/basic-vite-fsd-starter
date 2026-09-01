import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputOTP } from './InputOTP';
import { InputOTPGroup } from './InputOTPGroup';
import { InputOTPSeparator } from './InputOTPSeparator';
import { InputOTPSlot } from './InputOTPSlot';

const meta: Meta<typeof InputOTP> = {
  component: InputOTP,
  title: 'Shared/InputOTP'
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: () => {
    return (
      <InputOTP maxLength={6} aria-label="One-time password">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );
  }
};
