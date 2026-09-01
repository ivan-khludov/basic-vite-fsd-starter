import { type ComponentPropsWithoutRef } from 'react';

import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;

export const SelectLabel = ({ className, ...rest }: SelectLabelProps) => {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('px-2 py-1.5 text-xs text-muted-foreground', className)}
      {...rest}
    />
  );
};
