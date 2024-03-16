import { SupabaseClientDatabase } from '@/types/supabase.types'

export async function userHouseholds(user_id: string, supabase: SupabaseClientDatabase) {
  return supabase.from('households').select('*').eq('user_id', user_id)
}
