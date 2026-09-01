import { Toaster } from '@/shared/ui/toaster';

import { AppErrorFallback } from './providers/error-boundary/AppErrorFallback';
import { ErrorBoundary } from './providers/error-boundary/ErrorBoundary';
import { I18nProvider } from './providers/i18n/I18nProvider';
import { QueryProvider } from './providers/query/QueryProvider';
import { RouterProvider } from './providers/router/RouterProvider';
import { ThemeProvider } from './providers/theme/ThemeProvider';

export const App = () => {
  return (
    <I18nProvider>
      <ErrorBoundary fallback={<AppErrorFallback />}>
        <ThemeProvider>
          <QueryProvider>
            <RouterProvider />
          </QueryProvider>

          <Toaster position="top-right" />
        </ThemeProvider>
      </ErrorBoundary>
    </I18nProvider>
  );
};
