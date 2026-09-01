import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { buttonVariants, type Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

type QuestionnaireSkipProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Skip
> &
  Pick<ComponentPropsWithoutRef<typeof Button>, 'size' | 'variant'> & {
    label?: string;
  };

export const QuestionnaireSkip = ({
  size = 'default',
  variant = 'outline',
  label = 'Skip',
  className,
  children,
  ...rest
}: QuestionnaireSkipProps) => {
  const content: ReactNode = children ?? label;

  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      data-size={size}
      data-variant={variant}
      className={buttonVariants({
        size,
        variant,
        className: cn(
          'col-start-2 row-start-1 min-h-11 justify-self-end sm:min-h-0',
          className
        )
      })}
      {...rest}
    >
      {content}
    </QuestionnairePrimitive.Skip>
  );
};
