import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type AccordionItemProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export const AccordionItem = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...rest }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      data-slot="accordion-item"
      className={cn('not-last:border-b', className)}
      {...rest}
    />
  );
});

AccordionItem.displayName = 'AccordionItem';
