import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type KbdProps = ComponentPropsWithoutRef<'kbd'>;

export const Kbd = ({ className, ...rest }: KbdProps) => {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...rest}
    />
  );
};
