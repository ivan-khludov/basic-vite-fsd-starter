import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { ROUTES_CONFIG } from '@/shared/config';
import { Button } from '@/shared/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader
} from '@/shared/ui/empty';

export const ProductNotFound = () => {
  const { t } = useTranslation();

  return (
    <Empty className="border">
      <EmptyHeader>
        <h1 className="text-lg font-medium tracking-tight">
          {t('errors.notFoundTitle')}
        </h1>
        <EmptyDescription>{t('errors.notFoundDescription')}</EmptyDescription>
      </EmptyHeader>

      <EmptyContent>
        <Button asChild variant="outline">
          <Link to={ROUTES_CONFIG.HOME.href}>{t('errors.goHome')}</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
};

ProductNotFound.displayName = 'ProductNotFound';
