import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import { cn } from '@/shared/utils';

export const ComboboxGroup = ({
  className,
  ...rest
}: ComboboxPrimitive.Group.Props) => {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...rest}
    />
  );
};
