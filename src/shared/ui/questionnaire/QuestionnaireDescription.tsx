import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireDescriptionProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Description
>;

export const QuestionnaireDescription = ({
  className,
  ...rest
}: QuestionnaireDescriptionProps) => {
  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      className={cn('text-sm text-pretty text-muted-foreground', className)}
      {...rest}
    />
  );
};
