import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { AspectRatio as AspectRatioPrimitive } from 'radix-ui';

export const AspectRatio = forwardRef<
  ComponentRef<typeof AspectRatioPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>((props, ref) => {
  return (
    <AspectRatioPrimitive.Root ref={ref} data-slot="aspect-ratio" {...props} />
  );
});

AspectRatio.displayName = 'AspectRatio';
