import { http, HttpResponse } from 'msw';
import { afterEach, describe, expect, it } from 'vitest';

import { configureHttpAuth } from '@/shared/api';
import { apiUrl, server, TEST_ACCESS_TOKEN, TEST_USER } from '@/shared/testing';

import { fetchCurrentUser } from './users-api';

afterEach(() => {
  configureHttpAuth({
    getAuthToken: () => null,
    onUnauthorized: () => undefined
  });
});

describe('fetchCurrentUser', () => {
  it('maps DummyJSON /auth/me into the user entity', async () => {
    configureHttpAuth({
      getAuthToken: () => TEST_ACCESS_TOKEN,
      onUnauthorized: () => undefined
    });

    const user = await fetchCurrentUser();

    expect(user).toEqual({
      email: TEST_USER.email,
      firstName: TEST_USER.firstName,
      id: TEST_USER.id,
      imageUrl: TEST_USER.image,
      lastName: TEST_USER.lastName,
      role: TEST_USER.role,
      username: TEST_USER.username
    });
  });

  it('maps an unknown DummyJSON role to user', async () => {
    configureHttpAuth({
      getAuthToken: () => TEST_ACCESS_TOKEN,
      onUnauthorized: () => undefined
    });

    server.use(
      http.get(apiUrl('/auth/me'), () => {
        return HttpResponse.json({
          ...TEST_USER,
          role: 'superadmin'
        });
      })
    );

    const user = await fetchCurrentUser();

    expect(user.role).toBe('user');
  });

  it('rejects with 401 when the request has no access token', async () => {
    configureHttpAuth({
      getAuthToken: () => null,
      onUnauthorized: () => undefined
    });

    await expect(fetchCurrentUser()).rejects.toMatchObject({
      name: 'ApiError',
      status: 401
    });
  });
});
