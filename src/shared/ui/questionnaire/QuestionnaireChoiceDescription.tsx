import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/shared/utils';

type QuestionnaireChoiceDescriptionProps = ComponentPropsWithoutRef<'span'>;

export const QuestionnaireChoiceDescription = ({
  className,
  ...rest
}: QuestionnaireChoiceDescriptionProps) => {
  return (
    <span
      data-slot="questionnaire-choice-description"
      className={cn('text-muted-foreground', className)}
      {...rest}
    />
  );
};
