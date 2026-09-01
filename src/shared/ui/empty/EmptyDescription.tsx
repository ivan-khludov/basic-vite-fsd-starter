import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type EmptyDescriptionProps = ComponentPropsWithoutRef<'p'>;

export const EmptyDescription = ({
  className,
  ...rest
}: EmptyDescriptionProps) => {
  return (
    <p
      data-slot="empty-description"
      className={cn(
        'text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className
      )}
      {...rest}
    />
  );
};
