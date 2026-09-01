import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type MessageGroupProps = ComponentPropsWithoutRef<'div'>;

export const MessageGroup = ({ className, ...rest }: MessageGroupProps) => {
  return (
    <div
      data-slot="message-group"
      className={cn('flex min-w-0 flex-col gap-2', className)}
      {...rest}
    />
  );
};
