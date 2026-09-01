import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type DrawerFooterProps = ComponentPropsWithoutRef<'div'>;

export const DrawerFooter = ({ className, ...rest }: DrawerFooterProps) => {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...rest}
    />
  );
};
