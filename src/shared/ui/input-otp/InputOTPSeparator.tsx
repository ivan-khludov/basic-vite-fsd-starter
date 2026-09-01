import { type ComponentPropsWithoutRef } from 'react';

import { MinusIcon } from 'lucide-react';

type InputOTPSeparatorProps = ComponentPropsWithoutRef<'div'>;

export const InputOTPSeparator = (props: InputOTPSeparatorProps) => {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      {...props}
    >
      <MinusIcon />
    </div>
  );
};
