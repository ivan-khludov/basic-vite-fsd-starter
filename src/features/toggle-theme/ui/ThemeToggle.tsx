import { useCallback } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();

  const isDarkTheme = resolvedTheme === 'dark';

  const handleToggle = useCallback(() => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }, [isDarkTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label={t('layout.toggleTheme')}
      title={t('layout.toggleTheme')}
      onClick={handleToggle}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
