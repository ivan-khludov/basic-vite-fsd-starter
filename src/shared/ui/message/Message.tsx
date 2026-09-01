import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type MessageProps = ComponentPropsWithoutRef<'div'> & {
  align?: 'start' | 'end';
};

export const Message = ({
  align = 'start',
  className,
  ...rest
}: MessageProps) => {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        'group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse',
        className
      )}
      {...rest}
    />
  );
};
