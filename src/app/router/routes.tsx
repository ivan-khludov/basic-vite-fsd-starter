import { createBrowserRouter, type RouteObject } from 'react-router';

import { AppLayout } from '@/app/layouts/AppLayout';
import {
  ROUTES_CONFIG,
  type RouteAccess,
  type RouteConfig
} from '@/shared/config';

import { type RouteHandle } from './DocumentTitle';
import { RequireAuth } from './guards/RequireAuth';
import { RequireGuest } from './guards/RequireGuest';
import { RootLayout } from './RootLayout';
import { RouteErrorBoundary } from './RouteErrorBoundary';
import { RouteLoadingFallback } from './RouteLoadingFallback';

type RouteHref = (typeof ROUTES_CONFIG)[keyof typeof ROUTES_CONFIG]['href'];

const PAGE_LOADERS = {
  [ROUTES_CONFIG.HOME.href]: async () => {
    const { HomePage } = await import('@/pages/home');

    return { Component: HomePage };
  },
  [ROUTES_CONFIG.LOGIN.href]: async () => {
    const { LoginPage } = await import('@/pages/login');

    return { Component: LoginPage };
  },
  [ROUTES_CONFIG.NOT_FOUND.href]: async () => {
    const { NotFoundPage } = await import('@/pages/not-found');

    return { Component: NotFoundPage };
  },
  [ROUTES_CONFIG.PRODUCT.href]: async () => {
    const { ProductPage } = await import('@/pages/product');

    return { Component: ProductPage };
  }
} satisfies Record<RouteHref, NonNullable<RouteObject['lazy']>>;

const routesWithAccess = (access: RouteAccess): RouteConfig[] => {
  return Object.values(ROUTES_CONFIG).filter((route) => {
    return route.access === access;
  });
};

const toLazyRoute = (route: RouteConfig): RouteObject => {
  const lazy = PAGE_LOADERS[route.href as RouteHref];

  return {
    path: route.href,
    handle: { titleKey: route.titleKey } satisfies RouteHandle,
    lazy
  };
};

export const router = createBrowserRouter([
  {
    errorElement: <RouteErrorBoundary />,
    HydrateFallback: RouteLoadingFallback,
    element: <RootLayout />,
    children: [
      {
        element: <RequireGuest />,
        children: routesWithAccess('auth').map(toLazyRoute)
      },
      {
        element: <RequireAuth />,
        children: [
          {
            element: <AppLayout />,
            children: routesWithAccess('protected').map(toLazyRoute)
          }
        ]
      },
      ...routesWithAccess('public').map(toLazyRoute)
    ]
  }
]);
