import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

interface MenubarLabelProps extends ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> {
  inset?: boolean;
}

export const MenubarLabel = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Label>,
  MenubarLabelProps
>(({ inset, className, ...rest }, ref) => {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-inset:pl-8',
        className
      )}
      {...rest}
    />
  );
});

MenubarLabel.displayName = 'MenubarLabel';
