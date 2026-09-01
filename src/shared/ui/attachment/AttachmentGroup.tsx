import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AttachmentGroupProps = ComponentPropsWithoutRef<'div'>;

export const AttachmentGroup = ({
  className,
  ...rest
}: AttachmentGroupProps) => {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        'scroll-fade-x scrollbar-none flex min-w-0 snap-x snap-mandatory scroll-px-1 gap-3 overflow-x-auto overscroll-x-contain py-1 *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start',
        className
      )}
      {...rest}
    />
  );
};
