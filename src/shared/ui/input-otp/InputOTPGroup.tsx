import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type InputOTPGroupProps = ComponentPropsWithoutRef<'div'>;

export const InputOTPGroup = ({ className, ...rest }: InputOTPGroupProps) => {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        'flex items-center rounded-md has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
        className
      )}
      {...rest}
    />
  );
};
