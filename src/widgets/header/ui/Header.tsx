import { PanelLeftIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { LogoutButton } from '@/features/logout';
import { LocaleToggle } from '@/features/toggle-locale';
import { ThemeToggle } from '@/features/toggle-theme';
import { useSession } from '@/entities/session';
import { CurrentUser, useCurrentUserQuery } from '@/entities/user';
import { useToggleSidebar } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation();
  const { isAuthenticated } = useSession();
  const { data: user } = useCurrentUserQuery({ isEnabled: isAuthenticated });
  const toggleSidebar = useToggleSidebar();

  const currentUser = user ? <CurrentUser user={user} /> : null;

  return (
    <header
      className={cn(
        'flex h-14 shrink-0 items-center gap-2 border-b border-border px-3',
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={t('layout.toggleSidebar')}
        title={t('layout.toggleSidebar')}
        onClick={toggleSidebar}
      >
        <PanelLeftIcon />
      </Button>

      <span className="font-semibold">{t('common.appName')}</span>

      <div className="ml-auto flex items-center gap-2">
        {currentUser}
        <LocaleToggle />
        <ThemeToggle />
        <LogoutButton />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
