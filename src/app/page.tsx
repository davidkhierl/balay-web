import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const user = await supabase.auth.getUser()

  return (
    <div className="container">
      <h1>Supabase</h1>
      {user && user.data.user?.email}
    </div>
  )
}
