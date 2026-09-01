import { type ComponentPropsWithoutRef, type CSSProperties } from 'react';

import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';
import { tv } from 'tailwind-variants';

import { type ToggleVariants } from '@/shared/ui/toggle';

import { ToggleGroupContext } from './toggle-group-context';

const toggleGroupVariants = tv({
  base: [
    'group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-md',
    'data-[spacing=0]:data-[variant=outline]:shadow-xs data-vertical:flex-col data-vertical:items-stretch'
  ]
});

type ToggleGroupProps = ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  ToggleVariants & {
    spacing?: number;
    orientation?: 'horizontal' | 'vertical';
  };

export const ToggleGroup = ({
  variant,
  size,
  spacing = 2,
  orientation = 'horizontal',
  className,
  children,
  ...rest
}: ToggleGroupProps) => {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ '--gap': spacing } as CSSProperties}
      className={toggleGroupVariants({ className })}
      {...rest}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
};

ToggleGroup.displayName = 'ToggleGroup';
