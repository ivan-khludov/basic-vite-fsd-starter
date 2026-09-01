import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { describe, expect, it } from 'vitest';

import { setSessionAccessToken } from '@/entities/session';
import { ROUTES_CONFIG } from '@/shared/config';

import { RequireAuth } from './RequireAuth';
import { RequireGuest } from './RequireGuest';

const renderGuards = (initialPath: string) => {
  const router = createMemoryRouter(
    [
      {
        element: <RequireAuth />,
        children: [
          { path: ROUTES_CONFIG.HOME.href, element: <p>protected content</p> }
        ]
      },
      {
        element: <RequireGuest />,
        children: [
          { path: ROUTES_CONFIG.LOGIN.href, element: <p>login form</p> }
        ]
      }
    ],
    { initialEntries: [initialPath] }
  );

  return { router, ...render(<RouterProvider router={router} />) };
};

describe('route guards', () => {
  it('redirects a guest from a protected route to login', async () => {
    renderGuards(ROUTES_CONFIG.HOME.href);

    expect(await screen.findByText('login form')).toBeInTheDocument();
    expect(screen.queryByText('protected content')).not.toBeInTheDocument();
  });

  it('lets an authenticated user into a protected route', async () => {
    setSessionAccessToken('token', 'local');

    renderGuards(ROUTES_CONFIG.HOME.href);

    expect(await screen.findByText('protected content')).toBeInTheDocument();
  });

  it('redirects an authenticated user away from login', async () => {
    setSessionAccessToken('token', 'local');

    renderGuards(ROUTES_CONFIG.LOGIN.href);

    expect(await screen.findByText('protected content')).toBeInTheDocument();
  });

  it('keeps search and hash when sending a guest to login', async () => {
    const { router } = renderGuards('/?tab=inbox#unread');

    expect(await screen.findByText('login form')).toBeInTheDocument();
    expect(router.state.location.state).toEqual({
      from: '/?tab=inbox#unread'
    });
  });
});
