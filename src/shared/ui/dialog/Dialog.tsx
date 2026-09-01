import { type ComponentPropsWithoutRef } from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export const Dialog = (props: DialogProps) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

Dialog.displayName = 'Dialog';
