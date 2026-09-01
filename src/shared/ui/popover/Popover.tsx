import { type ComponentPropsWithoutRef } from 'react';

import { Popover as PopoverPrimitive } from 'radix-ui';

type PopoverProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;

export const Popover = (rest: PopoverProps) => {
  return <PopoverPrimitive.Root data-slot="popover" {...rest} />;
};
