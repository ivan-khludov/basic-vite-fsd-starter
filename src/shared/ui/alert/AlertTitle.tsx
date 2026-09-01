import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AlertTitleProps = ComponentPropsWithoutRef<'div'>;

export const AlertTitle = ({ className, ...rest }: AlertTitleProps) => {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground',
        className
      )}
      {...rest}
    />
  );
};
