import { useTranslation } from 'react-i18next';

import { Spinner } from '@/shared/ui/spinner';

/** Shown while a lazy route chunk is being loaded. */
export const RouteLoadingFallback = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner aria-label={t('common.loading')} className="size-6" />
    </div>
  );
};
