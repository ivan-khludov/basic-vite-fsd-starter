import { type ComponentPropsWithoutRef } from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';

import { Button, type ButtonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

interface AlertDialogActionProps
  extends
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>,
    Pick<ButtonVariants, 'variant' | 'size'> {}

export const AlertDialogAction = ({
  variant = 'default',
  size = 'default',
  className,
  ...rest
}: AlertDialogActionProps) => {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...rest}
      />
    </Button>
  );
};
