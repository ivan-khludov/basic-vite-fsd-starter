import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireChoicesProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Choices
>;

export const QuestionnaireChoices = ({
  className,
  ...rest
}: QuestionnaireChoicesProps) => {
  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      className={cn(
        'group/questionnaire-choices grid min-w-0 gap-3',
        className
      )}
      {...rest}
    />
  );
};
