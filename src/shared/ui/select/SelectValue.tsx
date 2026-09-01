import { type ComponentPropsWithoutRef } from 'react';

import { Select as SelectPrimitive } from 'radix-ui';

type SelectValueProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;

export const SelectValue = (props: SelectValueProps) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};
