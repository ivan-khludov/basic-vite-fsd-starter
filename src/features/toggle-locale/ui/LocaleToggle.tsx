import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { getNextLocale, setLocale } from '@/shared/i18n';
import { Button } from '@/shared/ui/button';

export const LocaleToggle = () => {
  const { i18n, t } = useTranslation();

  const nextLocale = getNextLocale(i18n.language);

  const handleToggle = useCallback(() => {
    void setLocale(nextLocale);
  }, [nextLocale]);

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={t('layout.toggleLocale')}
      title={t('layout.toggleLocale')}
      onClick={handleToggle}
    >
      {nextLocale.toUpperCase()}
    </Button>
  );
};
