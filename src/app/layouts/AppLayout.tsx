import { Suspense } from 'react';

import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { AppSidebar } from '@/widgets/sidebar';
import { Spinner } from '@/shared/ui/spinner';

import { AppQueryBoundary } from '../providers/query/AppQueryBoundary';

/**
 * Layout composition lives on the app layer: FSD forbids widget-to-widget
 * imports, so only app may combine header, sidebar, and footer slices.
 */
export const AppLayout = () => {
  const { t } = useTranslation();

  const lazyPageFallback = (
    <div className="flex h-full items-center justify-center py-10">
      <Spinner aria-label={t('common.loading')} />
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:ring-2 focus:ring-ring"
      >
        {t('layout.skipToContent')}
      </a>

      <Header />

      <div className="flex flex-1">
        <AppSidebar />

        <main id="main-content" tabIndex={-1} className="flex-1 p-6">
          <AppQueryBoundary>
            <Suspense fallback={lazyPageFallback}>
              <Outlet />
            </Suspense>
          </AppQueryBoundary>
        </main>
      </div>

      <Footer />
    </div>
  );
};
