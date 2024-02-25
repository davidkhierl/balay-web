import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user: currentUser },
  } = await supabase.auth.getUser()

  if (!currentUser)
    return (
      <div className="container">
        <h1>Supabase</h1>
      </div>
    )

  return (
    <div className="container">
      <h1>Supabase</h1>
    </div>
  )
}
