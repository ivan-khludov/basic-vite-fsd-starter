import { type ComponentPropsWithoutRef } from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';

import { Button, type ButtonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

interface AlertDialogCancelProps
  extends
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>,
    Pick<ButtonVariants, 'variant' | 'size'> {}

export const AlertDialogCancel = ({
  variant = 'outline',
  size = 'default',
  className,
  ...rest
}: AlertDialogCancelProps) => {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...rest}
      />
    </Button>
  );
};
