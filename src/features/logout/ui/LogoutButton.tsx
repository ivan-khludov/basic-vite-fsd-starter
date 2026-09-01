import { useCallback } from 'react';

import { LogOutIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';
import { toast } from '@/shared/ui/toaster';

import { useLogout } from '../model/useLogout';

export const LogoutButton = () => {
  const { t } = useTranslation();
  const logout = useLogout();

  const handleClick = useCallback(() => {
    logout();
    toast.success(t('auth.loggedOut'));
  }, [logout, t]);

  return (
    <Button variant="ghost" size="sm" onClick={handleClick}>
      <LogOutIcon />
      {t('auth.logout')}
    </Button>
  );
};
