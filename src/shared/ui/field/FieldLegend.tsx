import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { cn } from '@/shared/utils';

type FieldLegendVariant = 'legend' | 'label';

interface FieldLegendProps extends ComponentPropsWithoutRef<'legend'> {
  variant?: FieldLegendVariant;
}

export const FieldLegend = forwardRef<ComponentRef<'legend'>, FieldLegendProps>(
  ({ variant = 'legend', className, ...rest }, ref) => {
    return (
      <legend
        ref={ref}
        data-slot="field-legend"
        data-variant={variant}
        className={cn(
          'mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base',
          className
        )}
        {...rest}
      />
    );
  }
);

FieldLegend.displayName = 'FieldLegend';
