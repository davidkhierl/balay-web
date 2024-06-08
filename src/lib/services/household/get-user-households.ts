import { Household } from '@/lib/schema/household.schema'
import { SupabaseClientDatabase } from '@/types/supabase.types'
import { PostgrestResponse } from '@supabase/supabase-js'

/**
 * Retrieves the households associated with a specific user.
 *
 * @param {string} user_id - The ID of the user.
 * @param {SupabaseClientDatabase} supabase - The Supabase client database.
 *
 * @return {Promise<PostgrestResponse<Household>>} - A Promise that resolves to the response containing the households associated with the user.
 */
export async function getUserHouseholds(
  user_id: string,
  supabase: SupabaseClientDatabase
): Promise<PostgrestResponse<Household>> {
  return supabase.from('households').select('*', { count: 'estimated' }).eq('user_id', user_id)
}
