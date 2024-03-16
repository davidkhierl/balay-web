import { getAuthUser } from '@/lib/services/auth/get-auth-user'
import { getUser } from '@/lib/services/user/get-user'
import { SupabaseClientDatabase } from '@/types/supabase.types'

export async function getCurrentUser(supabase: SupabaseClientDatabase) {
  const authUser = await getAuthUser(supabase)

  const user = await getUser(authUser.id, supabase)

  if (!user) throw new Error('Failed to get current user')

  return user
}
