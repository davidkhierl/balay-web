'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

/**
 * Logs out the current user and redirect to /login.
 */
export async function logout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect('/login')
}
