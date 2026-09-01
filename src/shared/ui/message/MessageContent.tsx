import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type MessageContentProps = ComponentPropsWithoutRef<'div'>;

export const MessageContent = ({ className, ...rest }: MessageContentProps) => {
  return (
    <div
      data-slot="message-content"
      className={cn(
        'flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end',
        className
      )}
      {...rest}
    />
  );
};
