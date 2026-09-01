import { type ComponentPropsWithoutRef } from 'react';

import { ChevronRightIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

import { useCarousel } from './useCarousel';

type CarouselNextProps = ComponentPropsWithoutRef<typeof Button> & {
  label?: string;
};

const DEFAULT_NEXT_LABEL = 'Next slide';

export const CarouselNext = ({
  variant = 'outline',
  size = 'icon-sm',
  label = DEFAULT_NEXT_LABEL,
  className,
  ...rest
}: CarouselNextProps) => {
  const { orientation, canScrollNext, scrollNext } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      data-slot="carousel-next"
      isDisabled={!canScrollNext}
      className={cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? 'inset-y-0 -right-12 my-auto'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      onClick={scrollNext}
      {...rest}
    >
      <ChevronRightIcon />
      <span className="sr-only">{label}</span>
    </Button>
  );
};
