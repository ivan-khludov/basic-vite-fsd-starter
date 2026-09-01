import { type ComponentPropsWithoutRef } from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';

type AlertDialogProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Root
>;

export const AlertDialog = (rest: AlertDialogProps) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...rest} />;
};
