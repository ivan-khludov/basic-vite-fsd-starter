import { type ComponentPropsWithoutRef, type MouseEventHandler } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/shared/utils';

const inputGroupAddonVariants = tv({
  base: [
    'flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none',
    "group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4"
  ],
  variants: {
    align: {
      'inline-start':
        'order-first pl-2 has-[>button]:-ml-1 has-[>kbd]:ml-[-0.15rem]',
      'inline-end':
        'order-last pr-2 has-[>button]:-mr-1 has-[>kbd]:mr-[-0.15rem]',
      'block-start':
        'order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2',
      'block-end':
        'order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2'
    }
  },
  defaultVariants: { align: 'inline-start' }
});
type InputGroupAddonVariants = VariantProps<typeof inputGroupAddonVariants>;
interface InputGroupAddonProps
  extends ComponentPropsWithoutRef<'div'>, InputGroupAddonVariants {}
export const InputGroupAddon = ({
  align,
  className,
  ...rest
}: InputGroupAddonProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('button')) {
      return;
    }

    event.currentTarget.parentElement
      ?.querySelector<HTMLInputElement>('input')
      ?.focus();
  };

  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={handleClick}
      {...rest}
    />
  );
};
