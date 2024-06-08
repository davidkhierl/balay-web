import { Household } from '@/lib/schema/household.schema'
import { SupabaseClientDatabase } from '@/types/supabase.types'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

/**
 * Retrieves a single household by its ID from the Supabase database.
 *
 * @param {string} id - The ID of the household to retrieve.
 * @param {SupabaseClientDatabase} supabase - The Supabase client database instance.
 *
 * @return {Promise<PostgrestSingleResponse<Household>>} A promise that resolves with the single household matching the provided ID.
 */
export async function getHousehold(
  id: string,
  supabase: SupabaseClientDatabase
): Promise<PostgrestSingleResponse<Household>> {
  return supabase.from('households').select('*').eq('id', id).limit(1).single()
}
