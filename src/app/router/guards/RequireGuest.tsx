import { Navigate, Outlet } from 'react-router';

import { useSession } from '@/entities/session';
import { ROUTES_CONFIG } from '@/shared/config';

export const RequireGuest = () => {
  const { isAuthenticated } = useSession();

  if (isAuthenticated) {
    return <Navigate to={ROUTES_CONFIG.HOME.href} replace />;
  }

  return <Outlet />;
};
