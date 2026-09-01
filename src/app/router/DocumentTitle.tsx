import { useEffect } from 'react';

import { type ParseKeys } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useMatches } from 'react-router';

export interface RouteHandle {
  titleKey: ParseKeys;
}

const isRouteHandle = (handle: unknown): handle is RouteHandle => {
  return (
    typeof handle === 'object' &&
    handle !== null &&
    'titleKey' in handle &&
    typeof handle.titleKey === 'string'
  );
};

export const DocumentTitle = () => {
  const { t, i18n } = useTranslation();
  const matches = useMatches();

  const titleKey = [...matches]
    .reverse()
    .map((match) => match.handle)
    .find(isRouteHandle)?.titleKey;

  useEffect(() => {
    const appName = t('common.appName');

    document.title = titleKey ? `${t(titleKey)} · ${appName}` : appName;
  }, [i18n.language, t, titleKey]);

  return null;
};
