import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { buttonVariants, type Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

type QuestionnaireSubmitProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Submit
> &
  Pick<ComponentPropsWithoutRef<typeof Button>, 'size' | 'variant'> & {
    label?: string;
  };

export const QuestionnaireSubmit = ({
  size = 'default',
  variant = 'default',
  label = 'Submit',
  className,
  children,
  ...rest
}: QuestionnaireSubmitProps) => {
  const content: ReactNode = children ?? label;

  return (
    <QuestionnairePrimitive.Submit
      data-slot="questionnaire-submit"
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
    </QuestionnairePrimitive.Submit>
  );
};
