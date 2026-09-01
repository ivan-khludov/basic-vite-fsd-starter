import { type ComponentPropsWithoutRef } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const attachmentMediaVariants = tv({
  base: [
    'relative flex aspect-square w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted text-foreground',
    "group-data-[orientation=vertical]/attachment:w-full group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-7 group-data-[size=xs]/attachment:rounded-md group-data-[state=error]/attachment:bg-destructive/10 group-data-[state=error]/attachment:text-destructive group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5"
  ],
  variants: {
    variant: {
      icon: '',
      image:
        'opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover'
    }
  },
  defaultVariants: { variant: 'icon' }
});
type AttachmentMediaVariants = VariantProps<typeof attachmentMediaVariants>;
type AttachmentMediaProps = ComponentPropsWithoutRef<'div'> &
  AttachmentMediaVariants;
export const AttachmentMedia = ({
  variant = 'icon',
  className,
  ...rest
}: AttachmentMediaProps) => {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={attachmentMediaVariants({ variant, className })}
      {...rest}
    />
  );
};
