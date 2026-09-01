import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type AccordionTriggerAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface AccordionTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children: ReactNode;
}

export const AccordionTrigger = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    { isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          disabled={isDisabled}
          hidden={isHidden}
          autoFocus={hasAutoFocus}
          data-slot="accordion-trigger"
          className={cn(
            'group/accordion-trigger relative flex flex-1 cursor-pointer items-start justify-between rounded-md border border-transparent py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground',
            className
          )}
          {...rest}
        >
          {children}
          <ChevronDownIcon
            data-slot="accordion-trigger-icon"
            className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
          />
          <ChevronUpIcon
            data-slot="accordion-trigger-icon"
            className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';
