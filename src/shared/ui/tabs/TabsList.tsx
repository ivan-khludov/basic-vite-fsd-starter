import { type ComponentPropsWithoutRef } from 'react';

import { Tabs as TabsPrimitive } from 'radix-ui';
import { tv, type VariantProps } from 'tailwind-variants';

const tabsListVariants = tv({
  base: [
    'group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground',
    'data-[variant=line]:rounded-none',
    'group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col'
  ],
  variants: {
    variant: {
      default: 'bg-muted',
      line: 'gap-1 bg-transparent'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type TabsListVariants = VariantProps<typeof tabsListVariants>;

type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
  TabsListVariants;

export const TabsList = ({
  variant = 'default',
  className,
  ...rest
}: TabsListProps) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={tabsListVariants({ variant, className })}
      {...rest}
    />
  );
};
