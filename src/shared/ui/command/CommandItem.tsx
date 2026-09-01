import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { Command as CommandPrimitive } from 'cmdk';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/shared/utils';

type CommandItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface CommandItemProps extends Omit<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>,
  CommandItemAttributesOmit
> {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const CommandItem = forwardRef<
  ComponentRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(
  (
    { isDisabled, isHidden, hasAutoFocus, className, children, ...rest },
    ref
  ) => {
    return (
      <CommandPrimitive.Item
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="command-item"
        className={cn(
          'group/command-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 data-selected:**:[svg]:text-foreground',
          className
        )}
        {...rest}
      >
        {children}
        <CheckIcon className="ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
      </CommandPrimitive.Item>
    );
  }
);

CommandItem.displayName = 'CommandItem';
