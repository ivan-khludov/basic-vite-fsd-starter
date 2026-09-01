import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { Menubar as MenubarPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

import { MenubarPortal } from './MenubarPortal';

type MenubarContentProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
>;

export const MenubarContent = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Content>,
  MenubarContentProps
>(
  (
    { align = 'start', alignOffset = -4, sideOffset = 8, className, ...rest },
    ref
  ) => {
    return (
      <MenubarPortal>
        <MenubarPrimitive.Content
          ref={ref}
          data-slot="menubar-content"
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
          className={cn(
            'z-50 min-w-36 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95',
            className
          )}
          {...rest}
        />
      </MenubarPortal>
    );
  }
);

MenubarContent.displayName = 'MenubarContent';
