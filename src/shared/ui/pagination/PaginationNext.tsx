import { type ComponentPropsWithoutRef } from 'react';

import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

import { PaginationLink } from './PaginationLink';
import { toSlottedChild } from './to-slotted-child';

type PaginationNextProps = ComponentPropsWithoutRef<typeof PaginationLink> & {
  text?: string;
};

export const PaginationNext = ({
  asChild = false,
  text = 'Next',
  className,
  children,
  ...rest
}: PaginationNextProps) => {
  const content = (
    <>
      <span className="hidden sm:block">{text}</span>
      <ChevronRightIcon data-icon="inline-end" />
    </>
  );

  const child = toSlottedChild(asChild, children, content);

  return (
    <PaginationLink
      asChild={asChild}
      aria-label="Go to next page"
      size="default"
      className={cn('pr-2!', className)}
      {...rest}
    >
      {child}
    </PaginationLink>
  );
};
