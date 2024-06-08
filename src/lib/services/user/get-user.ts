import { User } from '@/lib/schema/user.schema'
import { SupabaseClientDatabase } from '@/types/supabase.types'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

/**
 * Retrieves a user from the database based on the provided ID.
 * @param {string} id - The unique identifier of the user.
 * @param {SupabaseClientDatabase} supabase - The Supabase client database instance.
 *
 * @return {Promise<PostgrestSingleResponse<User>>} - A Promise that resolves to the user matching the provided ID.
 */
export async function getUser(
  id: string,
  supabase: SupabaseClientDatabase
): Promise<PostgrestSingleResponse<User>> {
  return supabase.from('users').select().eq('id', id).limit(1).single()
}
