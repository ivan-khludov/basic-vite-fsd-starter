import { Navigate, Outlet, useLocation } from 'react-router';

import { useSession } from '@/entities/session';
import { ROUTES_CONFIG } from '@/shared/config';

export const RequireAuth = () => {
  const { isAuthenticated } = useSession();
  const location = useLocation();

  if (!isAuthenticated) {
    const from = `${location.pathname}${location.search}${location.hash}`;

    return <Navigate to={ROUTES_CONFIG.LOGIN.href} state={{ from }} replace />;
  }

  return <Outlet />;
};
