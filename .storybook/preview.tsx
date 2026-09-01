import type { Decorator, Preview } from '@storybook/react-vite';

import { type Locale } from '@/shared/i18n';

import { StorybookProviders } from './StorybookProviders';

import '../src/shared/styles/globals.css';

const THEMES = ['light', 'dark'] as const;
const LOCALES = ['ru', 'en'] as const;

type StorybookTheme = (typeof THEMES)[number];

const isTheme = (value: unknown): value is StorybookTheme => {
  return THEMES.some((theme) => theme === value);
};

const isLocale = (value: unknown): value is Locale => {
  return LOCALES.some((locale) => locale === value);
};

const withAppProviders: Decorator = (Story, context) => {
  const theme = isTheme(context.globals.theme)
    ? context.globals.theme
    : 'light';
  const locale = isLocale(context.globals.locale)
    ? context.globals.locale
    : 'ru';

  return (
    <StorybookProviders theme={theme} locale={locale}>
      <Story />
    </StorybookProviders>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    },
    locale: {
      description: 'UI language',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'ru', title: 'Русский' },
          { value: 'en', title: 'English' }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: 'light',
    locale: 'ru'
  },
  decorators: [withAppProviders],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
