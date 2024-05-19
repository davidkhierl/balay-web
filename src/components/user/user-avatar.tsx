import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils/class-name'
import { getNameInitials } from '@/lib/utils/get-name-initials'
import { User } from '@/types/models.types'

export interface UserAvatarProps {
  user: User
  className?: string
}

export default function UserAvatar({ className, user }: UserAvatarProps) {
  const initials = getNameInitials(user.full_name)
  return (
    <Avatar className={cn('h-14 w-14', className)}>
      {user.avatar_url && <AvatarImage src={user.avatar_url} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
