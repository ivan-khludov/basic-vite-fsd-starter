import { type ComponentPropsWithoutRef } from 'react';

import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';

type InputGroupInputProps = ComponentPropsWithoutRef<typeof Input>;

export const InputGroupInput = ({
  className,
  ...rest
}: InputGroupInputProps) => {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent',
        className
      )}
      {...rest}
    />
  );
};
