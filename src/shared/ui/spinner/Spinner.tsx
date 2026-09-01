import { type ComponentPropsWithoutRef } from 'react';

import { Loader2Icon } from 'lucide-react';

import { cn } from '@/shared/utils';

type SpinnerProps = ComponentPropsWithoutRef<'svg'> & {
  loadingLabel?: string;
};

const DEFAULT_LOADING_LABEL = 'Loading';

export const Spinner = ({
  loadingLabel = DEFAULT_LOADING_LABEL,
  className,
  ...rest
}: SpinnerProps) => {
  return (
    <Loader2Icon
      role="status"
      aria-label={loadingLabel}
      className={cn('size-4 animate-spin', className)}
      {...rest}
    />
  );
};

Spinner.displayName = 'Spinner';
