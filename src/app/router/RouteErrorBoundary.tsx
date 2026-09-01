import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

import { ROUTES_CONFIG } from '@/shared/config';
import { Button } from '@/shared/ui/button';
import { reportError } from '@/shared/utils';

export const RouteErrorBoundary = () => {
  const error = useRouteError();
  const { t } = useTranslation();

  const message = getErrorMessage(error, t('errors.unknown'));

  reportError('Unhandled route error', {
    context: 'router',
    payload: { message }
  });

  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold">{t('errors.title')}</h1>

      <p className="text-sm text-muted-foreground">{t('errors.description')}</p>

      <p className="font-mono text-xs text-muted-foreground">{message}</p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button asChild variant="outline">
          <Link to={ROUTES_CONFIG.HOME.href}>{t('errors.goHome')}</Link>
        </Button>

        <Button variant="outline" onClick={handleReload}>
          {t('errors.reload')}
        </Button>
      </div>
    </div>
  );
};

const getErrorMessage = (error: unknown, unknownMessage: string): string => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return unknownMessage;
};
