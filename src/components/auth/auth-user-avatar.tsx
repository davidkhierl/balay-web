import UserAvatar from '@/components/user/user-avatar'
import { getCurrentUser } from '@/lib/services/auth/get-current-user'
import { createClient } from '@/lib/supabase/server'

export interface AuthUserAvatarProps {
  className?: string
}

async function AuthUserAvatar({ className }: AuthUserAvatarProps) {
  const supabase = createClient()
  const user = await getCurrentUser(supabase)

  if (!user) throw new Error('Error loading current user')

  return <UserAvatar user={user} className={className} />
}

export { AuthUserAvatar }
