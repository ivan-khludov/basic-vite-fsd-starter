import { RouterProvider as ReactRouterProvider } from 'react-router';

import { router } from '@/app/router/routes';

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
