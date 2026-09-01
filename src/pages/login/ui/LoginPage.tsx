import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

import { LoginForm } from '@/features/auth-by-credentials';
import { useSession } from '@/entities/session';
import { ROUTES_CONFIG } from '@/shared/config';
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/alert';

interface LoginLocationState {
  from?: string;
}

export const LoginPage = () => {
  const { t } = useTranslation();
  const { endReason } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LoginLocationState | null;
  const redirectTo = state?.from ?? ROUTES_CONFIG.HOME.href;
  const isSessionExpired = endReason === 'expired';

  const handleSuccess = useCallback(() => {
    void navigate(redirectTo, { replace: true });
  }, [navigate, redirectTo]);

  const expiredAlert = isSessionExpired ? (
    <Alert>
      <AlertTitle>{t('auth.sessionExpiredTitle')}</AlertTitle>
      <AlertDescription>{t('auth.sessionExpiredDescription')}</AlertDescription>
    </Alert>
  ) : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-b from-background to-background/80">
      <div className="flex w-full max-w-md flex-col gap-4 px-6">
        {expiredAlert}
        <LoginForm className="w-full" onSuccess={handleSuccess} />
      </div>
    </main>
  );
};

LoginPage.displayName = 'LoginPage';
