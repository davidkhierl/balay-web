import UserAvatar from '@/components/user/user-avatar'
import { cn } from '@/lib/utils/class-name'
import { User } from '@/types/models.types'

export interface UserProfileAvatarProps {
  user: User
  className?: string
}

export function UserProfileAvatar({ className, user }: UserProfileAvatarProps) {
  return (
    <div className={cn('flex gap-2.5', className)}>
      <UserAvatar user={user} />
      <div className="flex flex-col">
        <span className="text-xl">{user.full_name}</span>
        <span className="text-xs font-normal">{user.email}</span>
      </div>
    </div>
  )
}
