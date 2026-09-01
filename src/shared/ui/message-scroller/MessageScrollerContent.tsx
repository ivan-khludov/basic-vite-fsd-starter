import { type ComponentPropsWithoutRef } from 'react';

import { MessageScroller as MessageScrollerPrimitive } from '@shadcn/react/message-scroller';

import { cn } from '@/shared/utils';

type MessageScrollerContentProps = ComponentPropsWithoutRef<
  typeof MessageScrollerPrimitive.Content
>;

export const MessageScrollerContent = ({
  className,
  ...rest
}: MessageScrollerContentProps) => {
  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      className={cn('flex h-max min-h-full flex-col gap-8', className)}
      {...rest}
    />
  );
};
