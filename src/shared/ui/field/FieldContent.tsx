import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { cn } from '@/shared/utils';

type FieldContentProps = ComponentPropsWithoutRef<'div'>;

export const FieldContent = forwardRef<ComponentRef<'div'>, FieldContentProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-content"
        className={cn(
          'group/field-content flex flex-1 flex-col gap-1 leading-snug',
          className
        )}
        {...rest}
      />
    );
  }
);

FieldContent.displayName = 'FieldContent';
