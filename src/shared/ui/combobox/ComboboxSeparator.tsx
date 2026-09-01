import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import { cn } from '@/shared/utils';

export const ComboboxSeparator = ({
  className,
  ...rest
}: ComboboxPrimitive.Separator.Props) => {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...rest}
    />
  );
};
