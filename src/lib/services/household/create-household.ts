import { Household } from '@/lib/schema/household.schema'
import { TablesInsert } from '@/types/database.types'
import { SupabaseClientDatabase } from '@/types/supabase.types'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

/**
 * Creates a new household in the database.
 *
 * @param {TablesInsert<'households'>} data - The data for the new household to be inserted.
 * @param {SupabaseClientDatabase} supabase - The Supabase client database object.
 *
 * @return {Promise<PostgrestSingleResponse<Household>>} A promise that resolves with the newly created household.
 */
export async function createHousehold(
  data: TablesInsert<'households'>,
  supabase: SupabaseClientDatabase
): Promise<PostgrestSingleResponse<Household>> {
  return supabase.from('households').insert(data).select().limit(1).single()
}
