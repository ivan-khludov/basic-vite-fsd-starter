import { type ParseKeys } from 'i18next';

export type RouteAccess = 'public' | 'protected' | 'auth';

export interface RouteConfig {
  href: string;
  titleKey: ParseKeys;
  access: RouteAccess;
  showInNav?: boolean;
}

const HOME: RouteConfig = {
  href: '/',
  titleKey: 'routes.home',
  access: 'protected',
  showInNav: true
};

const PRODUCT: RouteConfig = {
  href: '/products/:productId',
  titleKey: 'routes.product',
  access: 'protected'
};

const LOGIN: RouteConfig = {
  href: '/login',
  titleKey: 'routes.login',
  access: 'auth'
};

const NOT_FOUND: RouteConfig = {
  href: '*',
  titleKey: 'routes.notFound',
  access: 'public'
};

export const ROUTES_CONFIG = {
  HOME,
  LOGIN,
  NOT_FOUND,
  PRODUCT
} as const;

export const NAV_ROUTES = Object.values(ROUTES_CONFIG).filter((route) => {
  return route.showInNav === true;
});

export const buildProductHref = (productId: number): string => {
  return ROUTES_CONFIG.PRODUCT.href.replace(':productId', String(productId));
};
