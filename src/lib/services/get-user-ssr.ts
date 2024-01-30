import { getAuthUserSsr } from '@/lib/services/get-auth-user-ssr'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export async function getUser() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const authUser = await getAuthUserSsr()

  if (!authUser) return null

  const { data: user } = await supabase
    .from('users')
    .select()
    .eq('id', authUser.id)
    .limit(1)
    .single()

  return user
}
