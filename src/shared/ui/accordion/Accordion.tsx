import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type AccordionProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> & {
  className?: string;
};

const AccordionRoot = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, ...rest }, ref) => {
  return (
    <AccordionPrimitive.Root
      ref={ref}
      data-slot="accordion"
      className={cn('flex w-full flex-col', className)}
      {...rest}
    />
  );
});

AccordionRoot.displayName = 'Accordion';

export const Accordion = AccordionRoot;
