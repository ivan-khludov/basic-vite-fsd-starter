import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

type MenubarProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;

export const Menubar = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Root>,
  MenubarProps
>(({ className, ...rest }, ref) => {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      data-slot="menubar"
      className={cn(
        'flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs',
        className
      )}
      {...rest}
    />
  );
});

Menubar.displayName = 'Menubar';
