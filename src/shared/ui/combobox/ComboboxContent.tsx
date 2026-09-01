import { forwardRef } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react';

import { cn } from '@/shared/utils';

type ComboboxContentProps = ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    'side' | 'align' | 'sideOffset' | 'alignOffset' | 'anchor'
  >;

export const ComboboxContent = forwardRef<HTMLDivElement, ComboboxContentProps>(
  (
    {
      className,
      side = 'bottom',
      sideOffset = 6,
      align = 'start',
      alignOffset = 0,
      anchor,
      ...rest
    },
    ref
  ) => {
    return (
      <ComboboxPrimitive.Portal>
        <ComboboxPrimitive.Positioner
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          anchor={anchor}
          className="isolate z-50"
        >
          <ComboboxPrimitive.Popup
            ref={ref}
            data-slot="combobox-content"
            data-chips={!!anchor}
            className={cn(
              'group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
              className
            )}
            {...rest}
          />
        </ComboboxPrimitive.Positioner>
      </ComboboxPrimitive.Portal>
    );
  }
);

ComboboxContent.displayName = 'ComboboxContent';
