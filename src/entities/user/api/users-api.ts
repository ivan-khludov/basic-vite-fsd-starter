import { z } from 'zod';

import { requestJson } from '@/shared/api';

import { type User } from '../model/types';

// Responses are validated at the boundary so the rest of the app can trust the
// domain types instead of relying on a blind cast.
const dummyJsonUserSchema = z.object({
  email: z.string().optional(),
  firstName: z.string().optional(),
  id: z.number(),
  image: z.string().optional(),
  lastName: z.string().optional(),
  role: z.enum(['admin', 'moderator', 'user']).catch('user'),
  username: z.string()
});

const mapUser = (payload: z.infer<typeof dummyJsonUserSchema>): User => {
  return {
    email: payload.email ?? '',
    firstName: payload.firstName ?? '',
    id: payload.id,
    imageUrl: payload.image ?? '',
    lastName: payload.lastName ?? '',
    role: payload.role,
    username: payload.username
  };
};

export const fetchCurrentUser = async (signal?: AbortSignal): Promise<User> => {
  const payload = await requestJson<unknown>({
    path: '/auth/me',
    signal
  });

  return mapUser(dummyJsonUserSchema.parse(payload));
};
