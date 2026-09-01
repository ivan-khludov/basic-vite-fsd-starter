import type { Meta, StoryObj } from '@storybook/react-vite';

import { Carousel } from './Carousel';
import { CarouselContent } from './CarouselContent';
import { CarouselItem } from './CarouselItem';
import { CarouselNext } from './CarouselNext';
import { CarouselPrevious } from './CarouselPrevious';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Shared/Carousel'
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto max-w-xs px-12">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted p-6 text-lg font-medium">
                Slide 1
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted p-6 text-lg font-medium">
                Slide 2
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted p-6 text-lg font-medium">
                Slide 3
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
};
