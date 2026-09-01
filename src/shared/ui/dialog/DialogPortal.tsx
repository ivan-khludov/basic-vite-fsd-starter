import { type ComponentPropsWithoutRef } from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

type DialogPortalProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Portal
>;

export const DialogPortal = (props: DialogPortalProps) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

DialogPortal.displayName = 'DialogPortal';
