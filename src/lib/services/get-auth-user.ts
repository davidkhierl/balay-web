import { createClient } from '@/lib/supabase/client'

export async function getAuthUser() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user
}
