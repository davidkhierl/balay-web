import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserAvatarFallbackComponent } from '@/components/user/user-avatar-fallback-component'
import { getCurrentUser } from '@/lib/services/auth/get-current-user'
import { createClient } from '@/lib/supabase/server'
import { cn } from '@/lib/utils/class-name'
import { getNameInitials } from '@/lib/utils/get-name-initials'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { LogOut } from 'lucide-react'
import { redirect } from 'next/navigation'
import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export interface UserAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {}

async function UserAvatarFn({ className }: { className?: string }) {
  const supabase = createClient()
  const user = await getCurrentUser(supabase)

  const initials = getNameInitials(user.full_name)

  const signOut = async () => {
    'use server'

    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'rounded-full ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
          className
        )}>
        <Avatar>
          <AvatarImage src={user.avatar_url ?? undefined} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className="min-w-72">
          <DropdownMenuLabel className="flex items-center gap-2">
            <Avatar className="h-14 w-14">
              <AvatarImage src={user.avatar_url ?? undefined} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-xl">{user.full_name}</h4>
              <div className="text-xs font-normal">{user.email}</div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <form action={signOut}>
              <button className="inline-flex w-full items-center gap-2">
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
