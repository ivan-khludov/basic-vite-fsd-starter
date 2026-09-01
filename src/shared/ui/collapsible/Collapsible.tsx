import { type ComponentPropsWithoutRef } from 'react';

import { Collapsible as CollapsiblePrimitive } from 'radix-ui';

type CollapsibleProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Root
>;

export const Collapsible = (rest: CollapsibleProps) => {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...rest} />;
};
