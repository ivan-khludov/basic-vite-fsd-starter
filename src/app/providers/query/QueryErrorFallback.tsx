import { useTranslation } from 'react-i18next';

import { isNetworkApiError, isUnauthorizedApiError } from '@/shared/api';
import { Button } from '@/shared/ui/button';

interface QueryErrorFallbackProps {
  error?: Error | null;
  onRetry: () => void;
}

export const QueryErrorFallback = ({
  error,
  onRetry
}: QueryErrorFallbackProps) => {
  const { t } = useTranslation();

  const isNetworkError = isNetworkApiError(error);
  const isUnauthorized = isUnauthorizedApiError(error);
  const title = isNetworkError
    ? t('errors.networkTitle')
    : isUnauthorized
      ? t('auth.sessionExpiredTitle')
      : t('errors.title');
  const description = isNetworkError
    ? t('errors.networkDescription')
    : isUnauthorized
      ? t('auth.sessionExpiredDescription')
      : t('errors.description');

  const retryButton = isUnauthorized ? null : (
    <Button variant="outline" onClick={onRetry}>
      {t('common.retry')}
    </Button>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
      <h1 className="text-lg font-semibold">{title}</h1>

      <p className="text-sm text-muted-foreground">{description}</p>

      {retryButton}
    </div>
  );
};

QueryErrorFallback.displayName = 'QueryErrorFallback';
