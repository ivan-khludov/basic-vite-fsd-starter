import { forwardRef } from 'react';

import { OTPInput, type OTPInputProps } from 'input-otp';

import { cn } from '@/shared/utils';

type InputOTPAttributesOmit = 'disabled';

interface InputOTPComponentProps extends Omit<
  OTPInputProps,
  InputOTPAttributesOmit
> {
  isDisabled?: boolean;
}

export const InputOTP = forwardRef<HTMLInputElement, InputOTPComponentProps>(
  ({ containerClassName, isDisabled, className, ...rest }, ref) => {
    return (
      <OTPInput
        ref={ref}
        disabled={isDisabled}
        data-slot="input-otp"
        containerClassName={cn(
          'cn-input-otp flex items-center has-disabled:opacity-50',
          containerClassName
        )}
        spellCheck={false}
        className={cn('disabled:cursor-not-allowed', className)}
        {...(rest as OTPInputProps)}
      />
    );
  }
);

InputOTP.displayName = 'InputOTP';
