import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AttachmentActionsProps = ComponentPropsWithoutRef<'div'>;

export const AttachmentActions = ({
  className,
  ...rest
}: AttachmentActionsProps) => {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        'relative z-20 flex shrink-0 items-center group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:right-3 group-data-[orientation=vertical]/attachment:gap-1',
        className
      )}
      {...rest}
    />
  );
};
