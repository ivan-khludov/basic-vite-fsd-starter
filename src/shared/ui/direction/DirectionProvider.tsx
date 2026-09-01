import { type ComponentPropsWithoutRef } from 'react';

import { Direction } from 'radix-ui';

type DirectionProviderProps = ComponentPropsWithoutRef<
  typeof Direction.DirectionProvider
> & {
  direction?: ComponentPropsWithoutRef<
    typeof Direction.DirectionProvider
  >['dir'];
};

export const DirectionProvider = ({
  dir,
  direction,
  children
}: DirectionProviderProps) => {
  return (
    <Direction.DirectionProvider dir={direction ?? dir}>
      {children}
    </Direction.DirectionProvider>
  );
};
