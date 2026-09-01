import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AlertDialogMediaProps = ComponentPropsWithoutRef<'div'>;

export const AlertDialogMedia = ({
  className,
  ...rest
}: AlertDialogMediaProps) => {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        className
      )}
      {...rest}
    />
  );
};
