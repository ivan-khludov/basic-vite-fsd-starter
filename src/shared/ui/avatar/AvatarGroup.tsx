import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type AvatarGroupProps = ComponentPropsWithoutRef<'div'>;

export const AvatarGroup = ({ className, ...rest }: AvatarGroupProps) => {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        'group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
        className
      )}
      {...rest}
    />
  );
};
