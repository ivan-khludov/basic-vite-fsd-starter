import { type ComponentPropsWithoutRef } from 'react';

import { MessageScroller as MessageScrollerPrimitive } from '@shadcn/react/message-scroller';

import { cn } from '@/shared/utils';

type MessageScrollerViewportProps = ComponentPropsWithoutRef<
  typeof MessageScrollerPrimitive.Viewport
>;

export const MessageScrollerViewport = ({
  className,
  ...rest
}: MessageScrollerViewportProps) => {
  return (
    <MessageScrollerPrimitive.Viewport
      data-slot="message-scroller-viewport"
      className={cn(
        'scroll-fade-b scrollbar-thin scrollbar-gutter-stable data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent size-full min-h-0 min-w-0 overflow-y-auto overscroll-contain contain-content data-pending-scroll:invisible',
        className
      )}
      {...rest}
    />
  );
};
