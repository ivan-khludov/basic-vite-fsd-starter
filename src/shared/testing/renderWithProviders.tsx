import { type ReactElement, type ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';

import { i18n } from '@/shared/i18n';

interface RenderWithProvidersOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
}

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
      mutations: { retry: false }
    }
  });
};

export const renderWithProviders = (
  ui: ReactElement,
  { route = '/', ...renderOptions }: RenderWithProvidersOptions = {}
) => {
  const queryClient = createTestQueryClient();

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
          </QueryClientProvider>
        </ThemeProvider>
      </I18nextProvider>
    );
  };

  return {
    queryClient,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
};
