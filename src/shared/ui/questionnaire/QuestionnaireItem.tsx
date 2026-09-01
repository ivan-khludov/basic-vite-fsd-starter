import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireItemProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Item
>;

export const QuestionnaireItem = ({
  className,
  ...rest
}: QuestionnaireItemProps) => {
  return (
    <QuestionnairePrimitive.Item
      data-slot="questionnaire-item"
      className={cn(
        'flex min-w-0 flex-col gap-5 border-0 p-0 outline-none',
        className
      )}
      {...rest}
    />
  );
};
