import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AttachmentDescriptionProps = ComponentPropsWithoutRef<'span'>;

export const AttachmentDescription = ({
  className,
  ...rest
}: AttachmentDescriptionProps) => {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        'mt-0.5 block min-w-0 truncate text-xs text-muted-foreground group-data-[state=error]/attachment:text-destructive/80',
        'max-w-full',
        className
      )}
      {...rest}
    />
  );
};
