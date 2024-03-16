import { Database } from '@/types/database.types'
import { SupabaseClient } from '@supabase/supabase-js'

export type SupabaseClientDatabase = SupabaseClient<Database>
