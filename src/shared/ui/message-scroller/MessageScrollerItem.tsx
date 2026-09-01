import { type ComponentPropsWithoutRef } from 'react';

import { MessageScroller as MessageScrollerPrimitive } from '@shadcn/react/message-scroller';

import { cn } from '@/shared/utils';

type MessageScrollerItemProps = ComponentPropsWithoutRef<
  typeof MessageScrollerPrimitive.Item
>;

export const MessageScrollerItem = ({
  scrollAnchor = false,
  className,
  ...rest
}: MessageScrollerItemProps) => {
  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn(
        'min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]',
        className
      )}
      {...rest}
    />
  );
};
