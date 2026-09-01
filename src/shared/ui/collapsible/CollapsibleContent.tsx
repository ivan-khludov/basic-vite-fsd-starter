import { type ComponentPropsWithoutRef } from 'react';

import { Collapsible as CollapsiblePrimitive } from 'radix-ui';

type CollapsibleContentProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

export const CollapsibleContent = (rest: CollapsibleContentProps) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...rest}
    />
  );
};
