import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AlertDescriptionProps = ComponentPropsWithoutRef<'div'>;

export const AlertDescription = ({
  className,
  ...rest
}: AlertDescriptionProps) => {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
        className
      )}
      {...rest}
    />
  );
};
