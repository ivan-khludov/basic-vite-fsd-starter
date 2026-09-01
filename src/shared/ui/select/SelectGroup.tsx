import { type ComponentPropsWithoutRef } from 'react';

import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SelectGroupProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;

export const SelectGroup = ({ className, ...rest }: SelectGroupProps) => {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn('scroll-my-1 p-1', className)}
      {...rest}
    />
  );
};
