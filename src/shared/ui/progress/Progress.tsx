import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef
} from 'react';

import { Progress as ProgressPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type ProgressRoot = typeof ProgressPrimitive.Root;

interface ProgressProps extends ComponentPropsWithoutRef<ProgressRoot> {
  value?: number | null;
}

export const Progress = forwardRef<ElementRef<ProgressRoot>, ProgressProps>(
  ({ className, value, ...rest }, ref) => {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        data-slot="progress"
        className={cn(
          'relative flex h-1.5 w-full items-center overflow-x-hidden rounded-full bg-muted',
          className
        )}
        {...rest}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="size-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = 'Progress';
