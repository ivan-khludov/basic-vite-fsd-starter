import { type ComponentPropsWithoutRef } from 'react';

import { MessageScroller as MessageScrollerPrimitive } from '@shadcn/react/message-scroller';

import { cn } from '@/shared/utils';

type MessageScrollerProps = ComponentPropsWithoutRef<
  typeof MessageScrollerPrimitive.Root
>;

export const MessageScroller = ({
  className,
  ...rest
}: MessageScrollerProps) => {
  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      className={cn(
        'group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden',
        className
      )}
      {...rest}
    />
  );
};
