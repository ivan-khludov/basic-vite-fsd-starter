import {
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties
} from 'react';

import { Skeleton } from '@/shared/ui/skeleton';
import { cn } from '@/shared/utils';

type SidebarMenuSkeletonProps = ComponentPropsWithoutRef<'div'> & {
  showIcon?: boolean;
};

export const SidebarMenuSkeleton = ({
  showIcon = false,
  className,
  ...rest
}: SidebarMenuSkeletonProps) => {
  const [width] = useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  });

  const icon = showIcon ? (
    <Skeleton data-sidebar="menu-skeleton-icon" className="size-4 rounded-md" />
  ) : null;

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
      {...rest}
    >
      {icon}
      <Skeleton
        data-sidebar="menu-skeleton-text"
        className="h-4 max-w-(--skeleton-width) flex-1"
        style={
          {
            '--skeleton-width': width
          } as CSSProperties
        }
      />
    </div>
  );
};
