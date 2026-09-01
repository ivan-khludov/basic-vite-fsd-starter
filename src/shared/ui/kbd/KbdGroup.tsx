import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type KbdGroupProps = ComponentPropsWithoutRef<'div'>;

export const KbdGroup = ({ className, ...rest }: KbdGroupProps) => {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...rest}
    />
  );
};
