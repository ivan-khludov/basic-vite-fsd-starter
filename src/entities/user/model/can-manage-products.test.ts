import { describe, expect, it } from 'vitest';

import { canManageProducts } from './can-manage-products';
import { type User } from './types';

const createUser = (role: User['role']): User => {
  return {
    email: 'a@example.com',
    firstName: 'Ann',
    id: 1,
    imageUrl: '',
    lastName: 'Lee',
    role,
    username: 'ann'
  };
};

describe('canManageProducts', () => {
  it('allows admin and moderator to write the catalog', () => {
    expect(canManageProducts(createUser('admin'))).toBe(true);
    expect(canManageProducts(createUser('moderator'))).toBe(true);
  });

  it('denies a regular user', () => {
    expect(canManageProducts(createUser('user'))).toBe(false);
  });
});
