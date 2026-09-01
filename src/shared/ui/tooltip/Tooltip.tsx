import { type ComponentPropsWithoutRef } from 'react';

import { Tooltip as TooltipPrimitive } from 'radix-ui';

type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;

export const Tooltip = (rest: TooltipProps) => {
  return <TooltipPrimitive.Root data-slot="tooltip" {...rest} />;
};
