import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type ItemDescriptionProps = ComponentPropsWithoutRef<'p'>;

export const ItemDescription = ({
  className,
  ...rest
}: ItemDescriptionProps) => {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className
      )}
      {...rest}
    />
  );
};
