import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/shared/ui/dialog';
import { cn } from '@/shared/utils';

type CommandDialogProps = ComponentPropsWithoutRef<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
  children?: ReactNode;
};

export const CommandDialog = ({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  showCloseButton = false,
  className,
  children,
  ...rest
}: CommandDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn(
          'top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0',
          className
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

CommandDialog.displayName = 'CommandDialog';
