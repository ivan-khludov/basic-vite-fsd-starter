import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AttachmentTitleProps = ComponentPropsWithoutRef<'span'>;

export const AttachmentTitle = ({
  className,
  ...rest
}: AttachmentTitleProps) => {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        'group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer block max-w-full min-w-0 truncate font-medium',
        className
      )}
      {...rest}
    />
  );
};
