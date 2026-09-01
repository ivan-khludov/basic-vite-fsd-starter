import { type TFunction } from 'i18next';
import { z } from 'zod';

export const PASSWORD_MIN_LENGTH = 6;

/**
 * Built as a factory so validation messages follow the active language instead
 * of being frozen at module load.
 */
export const createLoginSchema = (t: TFunction) => {
  return z.object({
    username: z
      .string()
      .trim()
      .min(1, { message: t('auth.validation.usernameRequired') }),
    password: z.string().min(PASSWORD_MIN_LENGTH, {
      message: t('auth.validation.passwordMin', { count: PASSWORD_MIN_LENGTH })
    }),
    rememberMe: z.boolean()
  });
};

export type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;
