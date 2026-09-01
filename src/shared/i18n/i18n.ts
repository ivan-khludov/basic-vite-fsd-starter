import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { APP_CONFIG } from '@/shared/config';

import en from './locales/en.json';
import ru from './locales/ru.json';

export const SUPPORTED_LOCALES = ['ru', 'en'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const DEFAULT_LOCALE: Locale = 'ru';

const isLocale = (value: string | null | undefined): value is Locale => {
  return SUPPORTED_LOCALES.some((locale) => locale === value);
};

const readStoredLocale = (): Locale | null => {
  try {
    const stored = window.localStorage.getItem(APP_CONFIG.storage.localeKey);

    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
};

const detectLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const stored = readStoredLocale();

  if (stored) {
    return stored;
  }

  const [browserLocale] = window.navigator.language.split('-');

  return isLocale(browserLocale) ? browserLocale : DEFAULT_LOCALE;
};

const applyDocumentLang = (locale: string) => {
  if (typeof document === 'undefined' || !isLocale(locale)) {
    return;
  }

  document.documentElement.lang = locale;
};

void i18next.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en }
  },
  lng: detectLocale(),
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false }
});

i18next.on('languageChanged', applyDocumentLang);
applyDocumentLang(i18next.language);

export const i18n = i18next;

export const setLocale = async (locale: Locale) => {
  await i18next.changeLanguage(locale);

  try {
    window.localStorage.setItem(APP_CONFIG.storage.localeKey, locale);
  } catch {
    // Storage can be unavailable in private mode; the language still changes.
  }
};

export const getNextLocale = (locale: string): Locale => {
  return locale === 'ru' ? 'en' : 'ru';
};
