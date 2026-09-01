import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { cn } from '@/shared/utils';

type FieldGroupProps = ComponentPropsWithoutRef<'div'>;

export const FieldGroup = forwardRef<ComponentRef<'div'>, FieldGroupProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-group"
        className={cn(
          'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4',
          className
        )}
        {...rest}
      />
    );
  }
);

FieldGroup.displayName = 'FieldGroup';
