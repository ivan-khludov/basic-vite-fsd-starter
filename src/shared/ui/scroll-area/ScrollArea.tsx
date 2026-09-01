import { type ComponentPropsWithoutRef } from 'react';

import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

import { ScrollBar } from './ScrollBar';

type ScrollAreaProps = ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
>;

export const ScrollArea = ({
  className,
  children,
  ...rest
}: ScrollAreaProps) => {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('relative', className)}
      {...rest}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};
