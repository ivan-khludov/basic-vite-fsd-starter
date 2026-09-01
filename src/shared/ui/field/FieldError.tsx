import {
  forwardRef,
  useMemo,
  type ComponentPropsWithoutRef,
  type ComponentRef
} from 'react';

import { cn } from '@/shared/utils';

interface FieldErrorProps extends ComponentPropsWithoutRef<'div'> {
  errors?: Array<{ message?: string } | undefined>;
}

export const FieldError = forwardRef<ComponentRef<'div'>, FieldErrorProps>(
  ({ errors, className, children, ...rest }, ref) => {
    const content = useMemo(() => {
      if (children) {
        return children;
      }

      if (!errors?.length) {
        return null;
      }

      // Avoid spreading `Map.values()` (IterableIterator) to keep TS compatibility.
      type FieldErrorItem = { message?: string } | undefined;

      const errorsMap = new Map<string | undefined, FieldErrorItem>();
      errors.forEach((error) => {
        errorsMap.set(error?.message, error);
      });

      const uniqueErrors: FieldErrorItem[] = [];
      errorsMap.forEach((error) => {
        uniqueErrors.push(error);
      });

      if (uniqueErrors.length === 1) {
        return uniqueErrors[0]?.message;
      }

      return (
        <ul className="ml-4 flex list-disc flex-col gap-1">
          {uniqueErrors.map((error, index) => {
            if (!error?.message) {
              return null;
            }

            return <li key={index}>{error.message}</li>;
          })}
        </ul>
      );
    }, [children, errors]);

    if (!content) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="alert"
        data-slot="field-error"
        className={cn('text-sm font-normal text-destructive', className)}
        {...rest}
      >
        {content}
      </div>
    );
  }
);

FieldError.displayName = 'FieldError';
