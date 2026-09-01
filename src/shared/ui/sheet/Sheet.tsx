import { type ComponentPropsWithoutRef } from 'react';

import { Dialog as SheetPrimitive } from 'radix-ui';

type SheetProps = ComponentPropsWithoutRef<typeof SheetPrimitive.Root>;

export const Sheet = (props: SheetProps) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

Sheet.displayName = 'Sheet';
