import { type OptionHTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type NativeSelectOptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export const NativeSelectOption = ({
  className,
  ...rest
}: NativeSelectOptionProps) => {
  return (
    <option
      data-slot="native-select-option"
      className={cn('bg-[Canvas] text-[CanvasText]', className)}
      {...rest}
    />
  );
};
