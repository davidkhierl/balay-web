import { Household } from '@/lib/schema/household.schema'
import { getUserHouseholds } from '@/lib/services/household/get-user-households'
import { getCurrentUser } from '@/lib/services/user/get-current-user'
import { SupabaseClientDatabase } from '@/types/supabase.types'
import { PostgrestResponse } from '@supabase/supabase-js'

/**
 * Retrieves the households associated with the current user.
 *
 * @param {SupabaseClientDatabase} supabase - The Supabase client database instance.
 *
 * @return {Promise<PostgrestResponse<Household>>} The promise that resolves to the PostgrestResponse containing the household data.
 *
 * @throws {PostgrestError} If there is an error retrieving the current user's data or the user households.
 */
export async function getCurrentUserHouseholds(
  supabase: SupabaseClientDatabase
): Promise<PostgrestResponse<Household>> {
  const { data: user, error } = await getCurrentUser(supabase)
  if (error) throw error
  return getUserHouseholds(user.id, supabase)
}
