import { type ComponentPropsWithoutRef } from 'react';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

type AttachmentActionProps = ComponentPropsWithoutRef<typeof Button>;

export const AttachmentAction = ({
  variant,
  size = 'icon-xs',
  className,
  ...rest
}: AttachmentActionProps) => {
  return (
    <Button
      variant={variant ?? 'ghost'}
      size={size}
      data-slot="attachment-action"
      className={cn(className)}
      {...rest}
    />
  );
};
