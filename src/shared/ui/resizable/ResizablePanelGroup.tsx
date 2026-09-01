import { type ComponentPropsWithoutRef } from 'react';

import { Group } from 'react-resizable-panels';

import { cn } from '@/shared/utils';

type ResizablePanelGroupProps = ComponentPropsWithoutRef<typeof Group>;

export const ResizablePanelGroup = ({
  className,
  ...rest
}: ResizablePanelGroupProps) => {
  return (
    <Group
      data-slot="resizable-panel-group"
      className={cn(
        'flex h-full w-full aria-[orientation=vertical]:flex-col',
        className
      )}
      {...rest}
    />
  );
};
