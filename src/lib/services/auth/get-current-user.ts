import { UnauthorizedError } from '@/lib/error/unauthorized-error'
import { User } from '@/lib/schema/user.schema'
import { getAuthUser } from '@/lib/services/auth/get-auth-user'
import { getUser } from '@/lib/services/user/get-user'
import { SupabaseClientDatabase } from '@/types/supabase.types'

export async function getCurrentUser(supabase: SupabaseClientDatabase): Promise<User> {
  const authUser = await getAuthUser(supabase)

  const user = await getUser(authUser.id, supabase)

  if (!user) throw new UnauthorizedError()

  return user
}
