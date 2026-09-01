import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireErrorProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Error
>;

export const QuestionnaireError = ({
  className,
  ...rest
}: QuestionnaireErrorProps) => {
  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      className={cn('text-sm text-destructive', className)}
      {...rest}
    />
  );
};
