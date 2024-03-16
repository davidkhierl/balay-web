import { SupabaseClientDatabase } from '@/types/supabase.types'

export async function getAuthUser(supabase: SupabaseClientDatabase) {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('Failed to get authenticated user')

  return user
}
