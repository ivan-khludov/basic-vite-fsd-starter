import { type ComponentPropsWithoutRef } from 'react';

import { ChevronLeftIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

import { PaginationLink } from './PaginationLink';
import { toSlottedChild } from './to-slotted-child';

type PaginationPreviousProps = ComponentPropsWithoutRef<
  typeof PaginationLink
> & {
  text?: string;
};

export const PaginationPrevious = ({
  asChild = false,
  text = 'Previous',
  className,
  children,
  ...rest
}: PaginationPreviousProps) => {
  const content = (
    <>
      <ChevronLeftIcon data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </>
  );

  const child = toSlottedChild(asChild, children, content);

  return (
    <PaginationLink
      asChild={asChild}
      aria-label="Go to previous page"
      size="default"
      className={cn('pl-2!', className)}
      {...rest}
    >
      {child}
    </PaginationLink>
  );
};
