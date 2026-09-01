import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import { cn } from '@/shared/utils';

export const ComboboxChipsInput = ({
  className,
  ...rest
}: ComboboxPrimitive.Input.Props) => {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn('min-w-16 flex-1 outline-none', className)}
      {...rest}
    />
  );
};
