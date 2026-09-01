import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type InputGroupTextProps = ComponentPropsWithoutRef<'span'>;

export const InputGroupText = ({ className, ...rest }: InputGroupTextProps) => {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...rest}
    />
  );
};
