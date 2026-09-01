import { type ComponentPropsWithoutRef } from 'react';

import { Tabs as TabsPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

export const TabsContent = ({ className, ...rest }: TabsContentProps) => {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 text-sm outline-none', className)}
      {...rest}
    />
  );
};
