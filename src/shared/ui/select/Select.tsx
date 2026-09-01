import { type ComponentPropsWithoutRef } from 'react';

import { Select as SelectPrimitive } from 'radix-ui';

type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

export const Select = (props: SelectProps) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};

Select.displayName = 'Select';
