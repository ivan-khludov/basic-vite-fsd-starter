import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { ROUTES_CONFIG } from '@/shared/config';
import { Button } from '@/shared/ui/button';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-6xl font-bold text-muted-foreground">404</p>

      <h1 className="text-2xl font-semibold">{t('errors.notFoundTitle')}</h1>

      <p className="text-sm text-muted-foreground">
        {t('errors.notFoundDescription')}
      </p>

      <Button asChild variant="outline">
        <Link to={ROUTES_CONFIG.HOME.href}>{t('errors.goHome')}</Link>
      </Button>
    </main>
  );
};
