import { useEffect, type ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';

import { i18n, setLocale, type Locale } from '@/shared/i18n';

interface StorybookProvidersProps {
  theme: 'light' | 'dark';
  locale: Locale;
  children: ReactNode;
}

export const StorybookProviders = ({
  theme,
  locale,
  children
}: StorybookProvidersProps) => {
  useEffect(() => {
    void setLocale(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider
        attribute="class"
        defaultTheme={theme}
        forcedTheme={theme}
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
};
