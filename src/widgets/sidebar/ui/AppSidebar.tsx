import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { NAV_ROUTES } from '@/shared/config';
import { useIsSidebarOpen } from '@/shared/store';
import { cn } from '@/shared/utils';

interface AppSidebarProps {
  className?: string;
}

export const AppSidebar = ({ className }: AppSidebarProps) => {
  const { t } = useTranslation();
  const isSidebarOpen = useIsSidebarOpen();

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <aside
      className={cn(
        'w-56 shrink-0 border-r border-border bg-sidebar p-3',
        className
      )}
    >
      <p className="px-2 pb-2 text-xs font-medium text-muted-foreground uppercase">
        {t('layout.navigation')}
      </p>

      <nav className="flex flex-col gap-1">
        {NAV_ROUTES.map((route) => {
          return (
            <NavLink
              key={route.href}
              to={route.href}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-2 py-1.5 text-sm transition-colors',
                  isActive
                    ? 'bg-accent font-medium text-accent-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )
              }
            >
              {t(route.titleKey)}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
