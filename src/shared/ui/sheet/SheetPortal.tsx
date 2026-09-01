import { type ComponentPropsWithoutRef } from 'react';

import { Dialog as SheetPrimitive } from 'radix-ui';

type SheetPortalProps = ComponentPropsWithoutRef<typeof SheetPrimitive.Portal>;

export const SheetPortal = (rest: SheetPortalProps) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...rest} />;
};

SheetPortal.displayName = 'SheetPortal';
