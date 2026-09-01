import { type ComponentPropsWithoutRef } from 'react';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type AlertDialogTitleProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
>;

export const AlertDialogTitle = ({
  className,
  ...rest
}: AlertDialogTitleProps) => {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        'text-lg font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
        className
      )}
      {...rest}
    />
  );
};
