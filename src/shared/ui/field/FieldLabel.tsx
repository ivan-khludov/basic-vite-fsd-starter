import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Label } from '@/shared/ui/label';
import { cn } from '@/shared/utils';

type FieldLabelProps = ComponentPropsWithoutRef<typeof Label>;

export const FieldLabel = forwardRef<
  ComponentRef<typeof Label>,
  FieldLabelProps
>(({ className, ...rest }, ref) => {
  return (
    <Label
      ref={ref}
      data-slot="field-label"
      className={cn(
        'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
        className
      )}
      {...rest}
    />
  );
});

FieldLabel.displayName = 'FieldLabel';
