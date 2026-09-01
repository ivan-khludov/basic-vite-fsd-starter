import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import { cn } from '@/shared/utils';

export const ComboboxEmpty = ({
  className,
  ...rest
}: ComboboxPrimitive.Empty.Props) => {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        'hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex',
        className
      )}
      {...rest}
    />
  );
};
