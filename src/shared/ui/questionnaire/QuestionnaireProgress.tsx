import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireProgressProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Progress
>;

export const QuestionnaireProgress = ({
  className,
  ...rest
}: QuestionnaireProgressProps) => {
  return (
    <QuestionnairePrimitive.Progress
      data-slot="questionnaire-progress"
      className={cn(
        'min-h-[1lh] w-fit min-w-[14ch] text-xs font-medium text-muted-foreground tabular-nums',
        className
      )}
      {...rest}
    />
  );
};
