import UserAvatar from '@/components/user/user-avatar'
import { getCurrentUser } from '@/lib/services/user/get-current-user'
import { createClient } from '@/lib/supabase/server'

export interface AuthUserAvatarProps {
  className?: string
}

async function AuthUserAvatar({ className }: AuthUserAvatarProps) {
  const supabase = createClient()
  const { data: user, error } = await getCurrentUser(supabase)

  if (error) throw error

  return <UserAvatar user={user} className={className} />
}

export { AuthUserAvatar }
