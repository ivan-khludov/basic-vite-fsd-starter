import { type ComponentPropsWithoutRef } from 'react';

import { Textarea } from '@/shared/ui/textarea';
import { cn } from '@/shared/utils';

type InputGroupTextareaProps = ComponentPropsWithoutRef<'textarea'>;

export const InputGroupTextarea = ({
  className,
  ...rest
}: InputGroupTextareaProps) => {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent',
        className
      )}
      {...rest}
    />
  );
};
