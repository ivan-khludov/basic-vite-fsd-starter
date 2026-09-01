import {
  forwardRef,
  useContext,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';

import { toggleVariants, type ToggleVariants } from '@/shared/ui/toggle';

import { ToggleGroupContext } from './toggle-group-context';

type ToggleGroupItemAttributesOmit = 'disabled' | 'hidden' | 'autoFocus';

interface ToggleGroupItemProps
  extends
    Omit<
      ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
      ToggleGroupItemAttributesOmit
    >,
    ToggleVariants {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
  children?: ReactNode;
}

export const ToggleGroupItem = forwardRef<
  ComponentRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(
  (
    {
      variant = 'default',
      size = 'default',
      isDisabled,
      isHidden,
      hasAutoFocus,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const context = useContext(ToggleGroupContext);
    const resolvedVariant = context.variant || variant;
    const resolvedSize = context.size || size;

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        disabled={isDisabled}
        hidden={isHidden}
        autoFocus={hasAutoFocus}
        data-slot="toggle-group-item"
        data-variant={resolvedVariant}
        data-size={resolvedSize}
        data-spacing={context.spacing}
        className={toggleVariants({
          variant: resolvedVariant,
          size: resolvedSize,
          className: [
            'shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:shadow-none focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md data-[state=on]:bg-muted group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t',
            className
          ]
        })}
        {...rest}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    );
  }
);

ToggleGroupItem.displayName = 'ToggleGroupItem';
