import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { cn } from '@/shared/utils';

type FieldDescriptionProps = ComponentPropsWithoutRef<'p'>;

export const FieldDescription = forwardRef<
  ComponentRef<'p'>,
  FieldDescriptionProps
>(({ className, ...rest }, ref) => {
  return (
    <p
      ref={ref}
      data-slot="field-description"
      className={cn(
        'text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5',
        'last:mt-0 nth-last-2:-mt-1',
        '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className
      )}
      {...rest}
    />
  );
});

FieldDescription.displayName = 'FieldDescription';
