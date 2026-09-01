import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Label as LabelPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type LabelAttributesOmit = 'hidden';

interface LabelProps extends Omit<
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
  LabelAttributesOmit
> {
  isHidden?: boolean;
}

export const Label = forwardRef<
  ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ isHidden, className, ...rest }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      hidden={isHidden}
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none',
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...rest}
    />
  );
});

Label.displayName = 'Label';
