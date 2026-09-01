import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

import { i18n } from '@/shared/i18n';

import { createMemoryStorage } from './memory-storage';
import { server } from './msw/server';

const defineGlobal = (key: string, value: unknown) => {
  Object.defineProperty(window, key, {
    configurable: true,
    writable: true,
    value
  });
};

defineGlobal('localStorage', createMemoryStorage());
defineGlobal('sessionStorage', createMemoryStorage());

// next-themes reads matchMedia, Radix primitives measure with ResizeObserver.
defineGlobal('matchMedia', (query: string) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn()
  };
});

defineGlobal(
  'ResizeObserver',
  class {
    public observe() {}
    public unobserve() {}
    public disconnect() {}
  }
);

globalThis.ResizeObserver = window.ResizeObserver;

beforeAll(async () => {
  server.listen({ onUnhandledRequest: 'error' });

  // Pin the language so assertions do not depend on the host locale.
  await i18n.changeLanguage('ru');
});

afterEach(() => {
  cleanup();
  server.resetHandlers();

  window.localStorage.clear();
  window.sessionStorage.clear();

  // The session store listens to storage events, so this makes it drop the
  // cached snapshot without `shared` importing from `entities`.
  window.dispatchEvent(new Event('storage'));
});

afterAll(() => {
  server.close();
});
