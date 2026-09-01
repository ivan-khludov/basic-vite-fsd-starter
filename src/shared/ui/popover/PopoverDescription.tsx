import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type PopoverDescriptionProps = ComponentPropsWithoutRef<'p'>;

export const PopoverDescription = ({
  className,
  ...rest
}: PopoverDescriptionProps) => {
  return (
    <p
      data-slot="popover-description"
      className={cn('text-muted-foreground', className)}
      {...rest}
    />
  );
};
