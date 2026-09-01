import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireTitleProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Title
>;

export const QuestionnaireTitle = ({
  className,
  ...rest
}: QuestionnaireTitleProps) => {
  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      className={cn(
        'text-base font-semibold text-pretty [&:not(:has(~[data-slot=questionnaire-description]))]:mb-5',
        className
      )}
      {...rest}
    />
  );
};
