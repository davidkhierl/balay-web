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
import { cn } from '@/lib/utils/class-name'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export interface AuthUserMenuProps {
  className?: string
}

export async function AuthUserMenu({ className }: AuthUserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn('h-14 w-14 rounded-full p-0', className)} variant="ghost">
          <AuthUserAvatar className="h-full w-full" />
          <span className="sr-only">user profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className="min-w-72">
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="/account" className="flex items-center justify-between gap-2.5">
              <AuthUserProfileAvatar className="items-center" />
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
