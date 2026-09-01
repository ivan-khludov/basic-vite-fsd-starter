import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type MouseEvent
} from 'react';

import { PanelLeftIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

import { useSidebar } from './useSidebar';

type SidebarTriggerProps = ComponentPropsWithoutRef<typeof Button> & {
  toggleLabel?: string;
};

const DEFAULT_TOGGLE_LABEL = 'Toggle Sidebar';

export const SidebarTrigger = forwardRef<
  HTMLButtonElement,
  SidebarTriggerProps
>(
  (
    { toggleLabel = DEFAULT_TOGGLE_LABEL, className, onClick, ...rest },
    ref
  ) => {
    const { toggleSidebar } = useSidebar();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      toggleSidebar();
    };

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon-sm"
        data-sidebar="trigger"
        data-slot="sidebar-trigger"
        className={cn(className)}
        onClick={handleClick}
        {...rest}
      >
        <PanelLeftIcon />
        <span className="sr-only">{toggleLabel}</span>
      </Button>
    );
  }
);

SidebarTrigger.displayName = 'SidebarTrigger';
