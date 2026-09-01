import {
  forwardRef,
  useMemo,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Slider as SliderPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type SliderAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface SliderProps extends Omit<
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  SliderAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}

export const Slider = forwardRef<
  ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      defaultValue,
      value,
      min = 0,
      max = 100,
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      ...rest
    },
    ref
  ) => {
    const thumbValues = useMemo(() => {
      if (Array.isArray(value)) {
        return value;
      }

      if (Array.isArray(defaultValue)) {
        return defaultValue;
      }

      return [min, max];
    }, [value, defaultValue, min, max]);

    const thumbs = thumbValues.map((_, index) => {
      return (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          className="block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] select-none hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      );
    });

    return (
      <SliderPrimitive.Root
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="slider"
        className={cn(
          'relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col',
          className
        )}
        {...rest}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-1.5"
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className="absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {thumbs}
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = 'Slider';
