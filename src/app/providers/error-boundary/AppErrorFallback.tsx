import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';

export const AppErrorFallback = () => {
  const { t } = useTranslation();

  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold">{t('errors.title')}</h1>

      <p className="text-sm text-muted-foreground">{t('errors.description')}</p>

      <Button variant="outline" onClick={handleReload}>
        {t('errors.reload')}
      </Button>
    </div>
  );
};
