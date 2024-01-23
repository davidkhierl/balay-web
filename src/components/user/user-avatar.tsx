import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserAvatarFallbackComponent } from '@/components/user/user-avatar-fallback-component'
import { createClient } from '@/lib/supabase/server'
import { cn } from '@/lib/utils/class-name'
import { getNameInitials } from '@/lib/utils/get-name-initials'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { Frown, LogOut } from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export interface UserAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {}

async function UserAvatarFn({ className }: { className?: string }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user)
    return (
      <div
        title="No user found"
        className="flex h-10 w-10 items-center justify-center rounded-md bg-red-100 text-red-700">
        <Frown />
        <span className="sr-only">Error loading user</span>
      </div>
    )

  const name = user.email!
  const initials = getNameInitials(name)

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'rounded-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
          className
        )}>
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span>{name}</span>
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <form action={signOut}>
              <button className="inline-flex w-full gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

function UserAvatar() {
  return (
    <ErrorBoundary FallbackComponent={UserAvatarFallbackComponent}>
      <UserAvatarFn />
    </ErrorBoundary>
  )
}

export { UserAvatar }
