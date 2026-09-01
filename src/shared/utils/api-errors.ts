import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';

import { ApiError } from '@/shared/api';

const firstMessage = (messages: string | string[]): string | undefined => {
  return Array.isArray(messages) ? messages[0] : messages;
};

/**
 * Projects server-side validation errors onto form fields.
 * Returns false when the error carries no field errors, so the caller can fall
 * back to a general message.
 */
export const applyApiFieldErrors = <TFieldValues extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<TFieldValues>
): boolean => {
  if (!(error instanceof ApiError)) {
    return false;
  }

  const fieldErrors = error.details?.fieldErrors;

  if (!fieldErrors) {
    return false;
  }

  let hasAppliedErrors = false;

  Object.entries(fieldErrors).forEach(([field, messages]) => {
    const message = firstMessage(messages);

    if (!message) {
      return;
    }

    setError(field as Path<TFieldValues>, { type: 'server', message });
    hasAppliedErrors = true;
  });

  return hasAppliedErrors;
};
