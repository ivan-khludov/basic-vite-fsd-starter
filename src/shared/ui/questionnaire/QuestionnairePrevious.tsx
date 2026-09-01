import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';

import { buttonVariants, type Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

type QuestionnairePreviousProps = ComponentPropsWithoutRef<
  typeof QuestionnairePrimitive.Previous
> &
  Pick<ComponentPropsWithoutRef<typeof Button>, 'size' | 'variant'> & {
    label?: string;
  };

export const QuestionnairePrevious = ({
  size = 'default',
  variant = 'outline',
  label = 'Previous',
  className,
  children,
  ...rest
}: QuestionnairePreviousProps) => {
  const content: ReactNode = children ?? label;

  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      data-size={size}
      data-variant={variant}
      className={buttonVariants({
        size,
        variant,
        className: cn(
          'col-start-1 row-start-1 min-h-11 justify-self-start sm:min-h-0',
          className
        )
      })}
      {...rest}
    >
      {content}
    </QuestionnairePrimitive.Previous>
  );
};
