import { Outlet } from 'react-router';

import { DocumentTitle } from './DocumentTitle';

export const RootLayout = () => {
  return (
    <>
      <DocumentTitle />
      <Outlet />
    </>
  );
};
