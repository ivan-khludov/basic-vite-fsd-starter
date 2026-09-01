import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { cn } from '@/shared/utils';

type FieldTitleProps = ComponentPropsWithoutRef<'div'>;

export const FieldTitle = forwardRef<ComponentRef<'div'>, FieldTitleProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-label"
        className={cn(
          'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50',
          className
        )}
        {...rest}
      />
    );
  }
);

FieldTitle.displayName = 'FieldTitle';
