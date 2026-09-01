import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { cn } from '@/shared/utils';

type FieldSetProps = ComponentPropsWithoutRef<'fieldset'>;

export const FieldSet = forwardRef<ComponentRef<'fieldset'>, FieldSetProps>(
  ({ className, ...rest }, ref) => {
    return (
      <fieldset
        ref={ref}
        data-slot="field-set"
        className={cn(
          'flex flex-col gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
          className
        )}
        {...rest}
      />
    );
  }
);

FieldSet.displayName = 'FieldSet';
