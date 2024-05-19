import { getAuthUser } from '@/lib/services/auth/get-auth-user'
import { UnauthorizedError } from '@/lib/services/error/unauthorized-error'
import { getUser } from '@/lib/services/user/get-user'
import { User } from '@/types/models.types'
import { SupabaseClientDatabase } from '@/types/supabase.types'

export async function getCurrentUser(supabase: SupabaseClientDatabase): Promise<User> {
  const authUser = await getAuthUser(supabase)

  const user = await getUser(authUser.id, supabase)

  if (!user) throw new UnauthorizedError()

  return user
}
