import { type ComponentPropsWithoutRef } from 'react';

import { MessageScroller as MessageScrollerPrimitive } from '@shadcn/react/message-scroller';

type MessageScrollerProviderProps = ComponentPropsWithoutRef<
  typeof MessageScrollerPrimitive.Provider
>;

export const MessageScrollerProvider = (rest: MessageScrollerProviderProps) => {
  return <MessageScrollerPrimitive.Provider {...rest} />;
};
