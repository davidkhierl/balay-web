import { Button } from '@/components/ui/button'
import { UserAvatar } from '@/components/user/user-avatar'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'
import * as React from 'react'

async function UserAuth({ children }: { children?: React.ReactNode }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user)
    return (
      <Button asChild>
        <Link href="/login">Log in</Link>
      </Button>
    )

  return <UserAvatar />
}

export { UserAuth }
