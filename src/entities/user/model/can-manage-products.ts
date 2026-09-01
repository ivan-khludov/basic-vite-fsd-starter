import { type User } from './types';

export const canManageProducts = (user: User): boolean => {
  return user.role === 'admin' || user.role === 'moderator';
};
