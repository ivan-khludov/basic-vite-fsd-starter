import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type QuestionnaireActionsProps = ComponentPropsWithoutRef<'div'>;

export const QuestionnaireActions = ({
  className,
  ...rest
}: QuestionnaireActionsProps) => {
  return (
    <div
      data-slot="questionnaire-actions"
      className={cn(
        'grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 sm:min-h-9',
        className
      )}
      {...rest}
    />
  );
};
