import { AuthLogoutButton } from '@/components/auth/auth-logout-button'
import { AuthUserAvatar } from '@/components/auth/auth-user-avatar'
import { AuthUserProfileAvatar } from '@/components/auth/auth-user-profile-avatar'
import { ThemeDropdownRadioGroup } from '@/components/theme/theme-dropdown-menu-radio-group'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserAvatarLoading } from '@/components/user/user-avatar-loading'
import { UserProfileAvatarFallback } from '@/components/user/user-profile-avatar-fallback'
import { UserProfileAvatarLoading } from '@/components/user/user-profile-avatar-loading'
import { cn } from '@/lib/utils/class-name'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export interface AuthUserMenuProps {
  className?: string
}

export function AuthUserMenu({ className }: AuthUserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn('h-14 w-14 rounded-full p-0', className)} variant="ghost">
          <Suspense fallback={<UserAvatarLoading className="h-full w-full" />}>
            <AuthUserAvatar className="h-full w-full" />
          </Suspense>
          <span className="sr-only">user profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className="min-w-72">
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="/account" className="flex items-center justify-between gap-2.5">
              <ErrorBoundary fallback={<UserProfileAvatarFallback />}>
                <Suspense fallback={<UserProfileAvatarLoading />}>
                  <AuthUserProfileAvatar className="items-center" />{' '}
                </Suspense>
              </ErrorBoundary>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <ThemeDropdownRadioGroup />
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <AuthLogoutButton className="inline-flex w-full items-center gap-2">
              Logout
            </AuthLogoutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}
