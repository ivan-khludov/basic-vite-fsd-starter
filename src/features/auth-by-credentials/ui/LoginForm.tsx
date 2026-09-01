import { useCallback, useMemo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type PersistMode } from '@/entities/session';
import { ApiError } from '@/shared/api';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput } from '@/shared/ui/input-group';
import { applyApiFieldErrors } from '@/shared/utils';

import { type LoginRequest } from '../api/auth-api';
import { createLoginSchema, type LoginFormValues } from '../model/login-schema';
import { useLoginMutation } from '../model/useLoginMutation';

const INVALID_CREDENTIALS_STATUSES = [400, 401];

interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();

  const loginSchema = useMemo(() => createLoginSchema(t), [t]);

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setError
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: true
    }
  });

  const { mutateAsync, isPending } = useLoginMutation();

  const handleValidSubmit = useCallback(
    async (values: LoginFormValues) => {
      const persistMode: PersistMode = values.rememberMe ? 'local' : 'session';

      const request: LoginRequest = {
        username: values.username,
        password: values.password
      };

      try {
        await mutateAsync({ persistMode, request });

        onSuccess?.();
      } catch (error) {
        if (applyApiFieldErrors(error, setError)) {
          return;
        }

        const isInvalidCredentials =
          error instanceof ApiError &&
          INVALID_CREDENTIALS_STATUSES.includes(error.status);

        setError('root', {
          type: 'server',
          message: isInvalidCredentials
            ? t('auth.errors.invalidCredentials')
            : t('auth.errors.unknown')
        });
      }
    },
    [mutateAsync, onSuccess, setError, t]
  );

  const handleFormSubmit = handleSubmit(handleValidSubmit);

  const isLoading = isSubmitting || isPending;

  return (
    <Card className={className}>
      <form
        noValidate
        className="mx-auto flex w-full max-w-sm flex-col gap-6"
        onSubmit={handleFormSubmit}
      >
        <FieldSet>
          <FieldLegend>{t('auth.title')}</FieldLegend>

          <FieldDescription>{t('auth.description')}</FieldDescription>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">
                <FieldTitle>{t('auth.username')}</FieldTitle>
              </FieldLabel>

              <FieldContent>
                <InputGroup>
                  <InputGroupInput
                    id="username"
                    autoComplete="username"
                    placeholder={t('auth.usernamePlaceholder')}
                    aria-invalid={Boolean(errors.username)}
                    {...register('username')}
                  />
                </InputGroup>

                <FieldError errors={errors.username ? [errors.username] : []} />
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">
                <FieldTitle>{t('auth.password')}</FieldTitle>
              </FieldLabel>

              <FieldContent>
                <InputGroup>
                  <InputGroupInput
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder={t('auth.passwordPlaceholder')}
                    aria-invalid={Boolean(errors.password)}
                    {...register('password')}
                  />
                </InputGroup>

                <FieldError errors={errors.password ? [errors.password] : []} />
              </FieldContent>
            </Field>

            <Field orientation="horizontal">
              <FieldLabel>
                {/* Radix checkbox reports changes via onCheckedChange, which
                    register() cannot wire up, hence Controller. */}
                <Controller
                  name="rememberMe"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      ref={field.ref}
                      name={field.name}
                      checked={field.value}
                      uiSize="md"
                      onCheckedChange={field.onChange}
                      onBlur={field.onBlur}
                    />
                  )}
                />

                <FieldTitle>{t('auth.rememberMe')}</FieldTitle>
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldError errors={errors.root ? [errors.root] : []} />

        <Button type="submit" isLoading={isLoading} className="w-full">
          {t('auth.submit')}
        </Button>
      </form>
    </Card>
  );
};

LoginForm.displayName = 'LoginForm';
