import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AlertActionProps = ComponentPropsWithoutRef<'div'>;

export const AlertAction = ({ className, ...rest }: AlertActionProps) => {
  return (
    <div
      data-slot="alert-action"
      className={cn('absolute top-2.5 right-3', className)}
      {...rest}
    />
  );
};
