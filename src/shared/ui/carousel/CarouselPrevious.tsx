import { type ComponentPropsWithoutRef } from 'react';

import { ChevronLeftIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

import { useCarousel } from './useCarousel';

type CarouselPreviousProps = ComponentPropsWithoutRef<typeof Button> & {
  label?: string;
};

const DEFAULT_PREVIOUS_LABEL = 'Previous slide';

export const CarouselPrevious = ({
  variant = 'outline',
  size = 'icon-sm',
  label = DEFAULT_PREVIOUS_LABEL,
  className,
  ...rest
}: CarouselPreviousProps) => {
  const { orientation, canScrollPrev, scrollPrev } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      data-slot="carousel-previous"
      isDisabled={!canScrollPrev}
      className={cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? 'inset-y-0 -left-12 my-auto'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      onClick={scrollPrev}
      {...rest}
    >
      <ChevronLeftIcon />
      <span className="sr-only">{label}</span>
    </Button>
  );
};
