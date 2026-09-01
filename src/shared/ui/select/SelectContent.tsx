import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { Select as SelectPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils';

import { SelectScrollDownButton } from './SelectScrollDownButton';
import { SelectScrollUpButton } from './SelectScrollUpButton';

interface SelectContentProps extends ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> {
  position?: 'item-aligned' | 'popper';
  align?: ComponentPropsWithoutRef<typeof SelectPrimitive.Content>['align'];
  children?: ReactNode;
}

export const SelectContent = forwardRef<
  ComponentRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(
  (
    {
      position = 'item-aligned',
      align = 'center',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const isPopper = position === 'popper';

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          data-slot="select-content"
          data-align-trigger={!isPopper}
          position={position}
          align={align}
          className={cn(
            'relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
            isPopper &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className
          )}
          {...rest}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            data-position={position}
            className={cn(
              'data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)'
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  }
);

SelectContent.displayName = 'SelectContent';
