import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode
} from 'react';

import { Separator } from '@/shared/ui/separator';
import { cn } from '@/shared/utils';

interface FieldSeparatorProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}

export const FieldSeparator = forwardRef<
  ComponentRef<'div'>,
  FieldSeparatorProps
>(({ className, children, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-separator"
      data-content={Boolean(children)}
      className={cn(
        'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
        className
      )}
      {...rest}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          data-slot="field-separator-content"
          className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
        >
          {children}
        </span>
      )}
    </div>
  );
});

FieldSeparator.displayName = 'FieldSeparator';
