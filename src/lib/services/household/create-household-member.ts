import { Household, HouseholdMember } from '@/lib/schema/household.schema'
import { TablesInsert } from '@/types/database.types'
import { SupabaseClientDatabase } from '@/types/supabase.types'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

/**
 * Creates a new household member in the database.
 *
 * @param {TablesInsert<'household_members'>} data - The data for the new household member.
 * @param {SupabaseClientDatabase} supabase - The Supabase client instance.
 *
 * @return {Promise<PostgrestSingleResponse<Household>>} - A Promise that resolves with the newly created household member.
 */
export async function createHouseholdMember(
  data: TablesInsert<'household_members'>,
  supabase: SupabaseClientDatabase
): Promise<PostgrestSingleResponse<HouseholdMember>> {
  return supabase.from('household_members').insert(data).select().limit(1).single()
}
