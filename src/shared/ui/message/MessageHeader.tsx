import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type MessageHeaderProps = ComponentPropsWithoutRef<'div'>;

export const MessageHeader = ({ className, ...rest }: MessageHeaderProps) => {
  return (
    <div
      data-slot="message-header"
      className={cn(
        'flex max-w-full min-w-0 items-center px-3 text-xs font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0',
        className
      )}
      {...rest}
    />
  );
};
