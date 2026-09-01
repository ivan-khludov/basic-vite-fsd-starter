import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Avatar as AvatarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

export const AvatarImage = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...rest }, ref) => {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot="avatar-image"
      className={cn(
        'aspect-square size-full rounded-full object-cover',
        className
      )}
      {...rest}
    />
  );
});

AvatarImage.displayName = 'AvatarImage';
