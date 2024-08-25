import { User } from '@/lib/schema/user.schema'
import { getAuthUser } from '@/lib/services/auth/get-auth-user'
import { getUser } from '@/lib/services/user/get-user'
import { SupabaseClientDatabase } from '@/types/supabase.types'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

/**
 * Retrieves the current user from the Supabase database.
 *
 * @param {SupabaseClientDatabase} supabase - The Supabase Database client.
 *
 * @returns {Promise<PostgrestSingleResponse<User>>} - A promise that resolves to the user details.
 */
export async function getCurrentUser(
  supabase: SupabaseClientDatabase
): Promise<PostgrestSingleResponse<User>> {
  const authUser = await getAuthUser(supabase)

  return getUser(authUser.id, supabase)
}
