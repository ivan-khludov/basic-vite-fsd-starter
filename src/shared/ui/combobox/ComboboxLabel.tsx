import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import { cn } from '@/shared/utils';

export const ComboboxLabel = ({
  className,
  ...rest
}: ComboboxPrimitive.GroupLabel.Props) => {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn('px-2 py-1.5 text-xs text-muted-foreground', className)}
      {...rest}
    />
  );
};
