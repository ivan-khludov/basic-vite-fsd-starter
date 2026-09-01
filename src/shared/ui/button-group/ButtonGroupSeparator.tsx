import { type ComponentPropsWithoutRef } from 'react';

import { Separator } from '@/shared/ui/separator';
import { cn } from '@/shared/utils';

type ButtonGroupSeparatorProps = ComponentPropsWithoutRef<typeof Separator>;

export const ButtonGroupSeparator = ({
  orientation = 'vertical',
  className,
  ...rest
}: ButtonGroupSeparatorProps) => {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto',
        className
      )}
      {...rest}
    />
  );
};
