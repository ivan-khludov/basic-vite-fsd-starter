import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

import { useCarousel } from './useCarousel';

type CarouselItemProps = ComponentPropsWithoutRef<'div'>;

export const CarouselItem = ({ className, ...rest }: CarouselItemProps) => {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...rest}
    />
  );
};
