import {
  useCallback,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type KeyboardEvent
} from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/shared/utils';

import {
  CarouselContext,
  type CarouselApi,
  type CarouselProps
} from './useCarousel';

type CarouselRootProps = ComponentPropsWithoutRef<'div'> & CarouselProps;

export const Carousel = ({
  orientation = 'horizontal',
  opts,
  plugins,
  className,
  children,
  setApi,
  ...rest
}: CarouselRootProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y'
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((selectedApi: CarouselApi) => {
    if (!selectedApi) {
      return;
    }

    setCanScrollPrev(selectedApi.canScrollPrev());
    setCanScrollNext(selectedApi.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        className={cn('relative', className)}
        onKeyDownCapture={handleKeyDown}
        {...rest}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};
