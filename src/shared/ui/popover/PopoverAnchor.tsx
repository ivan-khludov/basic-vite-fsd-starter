import { type ComponentPropsWithoutRef } from 'react';

import { Popover as PopoverPrimitive } from 'radix-ui';

type PopoverAnchorProps = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Anchor
>;

export const PopoverAnchor = (rest: PopoverAnchorProps) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...rest} />;
};
