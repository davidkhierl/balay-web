import { UserProfileAvatar } from '@/components/user/user-profile-avatar'
import { getCurrentUser } from '@/lib/services/user/get-current-user'
import { createClient } from '@/lib/supabase/server'

export interface AuthUserProfileAvatarProps {
  className?: string
}

export async function AuthUserProfileAvatar({ className }: AuthUserProfileAvatarProps) {
  const supabase = createClient()
  const { data: user, error } = await getCurrentUser(supabase)

  if (error) throw error

  return <UserProfileAvatar user={user} className={className} />
}
