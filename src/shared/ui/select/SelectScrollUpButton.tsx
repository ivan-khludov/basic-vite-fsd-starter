import { type ComponentPropsWithoutRef } from 'react';

import { ChevronUpIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SelectScrollUpButtonProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollUpButton
>;

export const SelectScrollUpButton = ({
  className,
  ...rest
}: SelectScrollUpButtonProps) => {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...rest}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
};
