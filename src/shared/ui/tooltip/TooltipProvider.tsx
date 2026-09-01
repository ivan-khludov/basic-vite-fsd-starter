import { type ComponentPropsWithoutRef } from 'react';

import { Tooltip as TooltipPrimitive } from 'radix-ui';

type TooltipProviderProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
>;

export const TooltipProvider = ({
  delayDuration = 0,
  ...rest
}: TooltipProviderProps) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...rest}
    />
  );
};
