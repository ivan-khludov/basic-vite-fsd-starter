import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AlertDialogFooterProps = ComponentPropsWithoutRef<'div'>;

export const AlertDialogFooter = ({
  className,
  ...rest
}: AlertDialogFooterProps) => {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end',
        className
      )}
      {...rest}
    />
  );
};
