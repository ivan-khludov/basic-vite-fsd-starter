import { type ComponentPropsWithoutRef } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { cn } from '@/shared/utils';

type QuestionnaireInputProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Input
>;

export const QuestionnaireInput = ({
  className,
  ...rest
}: QuestionnaireInputProps) => {
  return (
    <div
      data-slot="questionnaire-input-wrapper"
      className="group/questionnaire-input relative w-full min-w-0"
    >
      <QuestionnairePrimitive.Input
        data-slot="questionnaire-input"
        className={cn(
          'h-9 min-h-11 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow,background-color] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 sm:min-h-0 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
          'selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground',
          className
        )}
        {...rest}
      />
    </div>
  );
};
