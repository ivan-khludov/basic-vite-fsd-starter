import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const fieldVariants = tv({
  base: [
    'group/field flex w-full gap-3',
    'data-[invalid=true]:text-destructive'
  ],
  variants: {
    orientation: {
      vertical: 'flex-col *:w-full [&>.sr-only]:w-auto',
      horizontal:
        'flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      responsive:
        'flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
});

type FieldVariants = VariantProps<typeof fieldVariants>;

type FieldProps = ComponentPropsWithoutRef<'div'> & FieldVariants;

export const Field = forwardRef<ComponentRef<'div'>, FieldProps>(
  ({ orientation, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        data-slot="field"
        data-orientation={orientation}
        className={fieldVariants({ orientation, className })}
        {...rest}
      />
    );
  }
);

Field.displayName = 'Field';
