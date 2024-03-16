import { SupabaseClientDatabase } from '@/types/supabase.types'

export async function getUser(id: string, supabase: SupabaseClientDatabase) {
  const { data: user } = await supabase.from('users').select().eq('id', id).limit(1).single()

  return user
}
