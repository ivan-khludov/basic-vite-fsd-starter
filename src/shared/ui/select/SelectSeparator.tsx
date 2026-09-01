import { type ComponentPropsWithoutRef } from 'react';

import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SelectSeparatorProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;

export const SelectSeparator = ({
  className,
  ...rest
}: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
      {...rest}
    />
  );
};
