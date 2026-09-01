import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Root
>;

export const Questionnaire = ({ className, ...rest }: QuestionnaireProps) => {
  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      className={cn('flex w-full min-w-0 flex-col gap-6', className)}
      {...rest}
    />
  );
};
