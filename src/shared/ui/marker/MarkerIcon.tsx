import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type MarkerIconProps = ComponentPropsWithoutRef<'span'>;

export const MarkerIcon = ({ className, ...rest }: MarkerIconProps) => {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...rest}
    />
  );
};
