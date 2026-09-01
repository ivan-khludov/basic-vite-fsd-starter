import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

import { useCarousel } from './useCarousel';

type CarouselContentProps = ComponentPropsWithoutRef<'div'>;

export const CarouselContent = ({
  className,
  ...rest
}: CarouselContentProps) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      data-slot="carousel-content"
      className="overflow-hidden"
    >
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...rest}
      />
    </div>
  );
};
