import { type ComponentPropsWithoutRef } from 'react';

import { HoverCard as HoverCardPrimitive } from 'radix-ui';

type HoverCardProps = ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>;

export const HoverCard = (rest: HoverCardProps) => {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...rest} />;
};
