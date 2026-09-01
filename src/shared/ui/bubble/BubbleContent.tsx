import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils';

interface BubbleContentProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export const BubbleContent = forwardRef<
  ComponentRef<'div'>,
  BubbleContentProps
>(({ asChild = false, className, ...rest }, ref) => {
  const Component = asChild ? Slot.Root : 'div';

  return (
    <Component
      ref={ref}
      data-slot="bubble-content"
      className={cn(
        'w-fit max-w-full min-w-0 overflow-hidden rounded-xl border border-transparent px-3 py-2 text-sm leading-relaxed wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-ring/50',
        className
      )}
      {...rest}
    />
  );
});

BubbleContent.displayName = 'BubbleContent';
