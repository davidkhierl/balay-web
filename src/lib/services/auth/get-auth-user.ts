import { SupabaseClientDatabase } from '@/types/supabase.types'
import { AuthError, User } from '@supabase/supabase-js'

/**
 * Retrieves the authenticated user from the Supabase client.
 *
 * @param {SupabaseClientDatabase} supabase - The Supabase client database instance.
 *
 * @returns {Promise<User>} - A promise that resolves to the authenticated user.
 *
 * @throws {AuthError} - Throws an error if there is an authentication error.
 */
export async function getAuthUser(supabase: SupabaseClientDatabase): Promise<User> {
  const userResponse = await supabase.auth.getUser()
  if (userResponse.error) throw userResponse.error
  return userResponse.data.user
}
