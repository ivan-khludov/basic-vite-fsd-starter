import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AttachmentContentProps = ComponentPropsWithoutRef<'div'>;

export const AttachmentContent = ({
  className,
  ...rest
}: AttachmentContentProps) => {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        'max-w-full min-w-0 flex-1 leading-tight group-data-[orientation=vertical]/attachment:px-1',
        className
      )}
      {...rest}
    />
  );
};
