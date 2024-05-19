import { UserProfileAvatar } from '@/components/user/user-profile-avatar'
import { getCurrentUser } from '@/lib/services/auth/get-current-user'
import { createClient } from '@/lib/supabase/server'

export interface AuthUserProfileAvatarProps {
  className?: string
}

export async function AuthUserProfileAvatar({ className }: AuthUserProfileAvatarProps) {
  const supabase = createClient()
  const user = await getCurrentUser(supabase)

  if (!user) throw new Error('Error loading current user')

  return <UserProfileAvatar user={user} className={className} />
}
