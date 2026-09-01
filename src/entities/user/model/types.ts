export type UserRole = 'admin' | 'moderator' | 'user';

export interface User {
  email: string;
  firstName: string;
  id: number;
  imageUrl: string;
  lastName: string;
  role: UserRole;
  username: string;
}
