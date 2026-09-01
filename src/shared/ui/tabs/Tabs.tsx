import { type ComponentPropsWithoutRef } from 'react';

import { Tabs as TabsPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export const Tabs = ({
  orientation = 'horizontal',
  className,
  ...rest
}: TabsProps) => {
  return (
    <TabsPrimitive.Root
      orientation={orientation}
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        'group/tabs flex gap-2 data-horizontal:flex-col',
        className
      )}
      {...rest}
    />
  );
};
