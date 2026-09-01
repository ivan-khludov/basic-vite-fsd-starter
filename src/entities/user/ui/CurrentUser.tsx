import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { cn } from '@/shared/utils';

import { type User } from '../model/types';

interface CurrentUserProps {
  user: User;
  className?: string;
}

const toDisplayName = (user: User) => {
  const fullName = `${user.firstName} ${user.lastName}`.trim();

  return fullName.length > 0 ? fullName : user.username;
};

const toInitials = (user: User) => {
  const source = user.firstName || user.username;

  return source.slice(0, 1).toUpperCase();
};

export const CurrentUser = ({ user, className }: CurrentUserProps) => {
  const displayName = toDisplayName(user);
  const initials = toInitials(user);

  const avatarImage = user.imageUrl ? (
    <AvatarImage src={user.imageUrl} alt={displayName} />
  ) : null;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Avatar size="sm">
        {avatarImage}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <span className="max-w-40 truncate text-sm font-medium">
        {displayName}
      </span>
    </div>
  );
};

CurrentUser.displayName = 'CurrentUser';
