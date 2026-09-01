import { type ComponentPropsWithoutRef } from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';

type AlertDialogPortalProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Portal
>;

export const AlertDialogPortal = (rest: AlertDialogPortalProps) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...rest} />
  );
};
