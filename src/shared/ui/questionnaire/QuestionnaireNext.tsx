import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { buttonVariants, type Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

type QuestionnaireNextProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Next
> &
  Pick<ComponentPropsWithoutRef<typeof Button>, 'size' | 'variant'> & {
    label?: string;
  };

export const QuestionnaireNext = ({
  size = 'default',
  variant = 'default',
  label = 'Next',
  className,
  children,
  ...rest
}: QuestionnaireNextProps) => {
  const content: ReactNode = children ?? label;

  return (
    <QuestionnairePrimitive.Next
      data-slot="questionnaire-next"
      data-size={size}
      data-variant={variant}
      className={buttonVariants({
        size,
        variant,
        className: cn(
          'col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0',
          className
        )
      })}
      {...rest}
    >
      {content}
    </QuestionnairePrimitive.Next>
  );
};
