import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Avatar as AvatarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  size?: 'default' | 'sm' | 'lg';
};

export const Avatar = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ size = 'default', className, ...rest }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      data-slot="avatar"
      data-size={size}
      className={cn(
        'group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten',
        className
      )}
      {...rest}
    />
  );
});

Avatar.displayName = 'Avatar';
