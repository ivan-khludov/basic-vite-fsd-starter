import { type ComponentPropsWithoutRef } from 'react';

import { ChevronDownIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SelectScrollDownButtonProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollDownButton
>;

export const SelectScrollDownButton = ({
  className,
  ...rest
}: SelectScrollDownButtonProps) => {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...rest}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
};
