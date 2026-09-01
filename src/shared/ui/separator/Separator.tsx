import { type ComponentPropsWithoutRef } from 'react';

import { Separator as SeparatorPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

export const Separator = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...rest
}: SeparatorProps) => {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch',
        className
      )}
      {...rest}
    />
  );
};
