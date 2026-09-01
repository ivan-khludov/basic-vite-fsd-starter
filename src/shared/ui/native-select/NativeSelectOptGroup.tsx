import { type OptgroupHTMLAttributes } from 'react';

import { cn } from '@/shared/utils';

type NativeSelectOptGroupProps = OptgroupHTMLAttributes<HTMLOptGroupElement>;

export const NativeSelectOptGroup = ({
  className,
  ...rest
}: NativeSelectOptGroupProps) => {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn('bg-[Canvas] text-[CanvasText]', className)}
      {...rest}
    />
  );
};
