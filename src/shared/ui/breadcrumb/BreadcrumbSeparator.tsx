import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

interface BreadcrumbSeparatorProps extends ComponentPropsWithoutRef<'li'> {
  children?: ReactNode;
}

export const BreadcrumbSeparator = ({
  children,
  className,
  ...rest
}: BreadcrumbSeparatorProps) => {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...rest}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  );
};
