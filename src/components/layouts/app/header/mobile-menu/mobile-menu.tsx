import BalayLogo from '@/assets/icons/balay-logo.svg'
import { AuthLogoutButton } from '@/components/auth/auth-logout-button'
import { AuthUserProfileAvatar } from '@/components/auth/auth-user-profile-avatar'
import { MobileMenuDialog } from '@/components/layouts/app/header/mobile-menu/mobile-menu-dialog'
import { MobileMenuDialogContent } from '@/components/layouts/app/header/mobile-menu/mobile-menu-dialog-content'
import { MobileMenuNavigationLinks } from '@/components/layouts/app/header/mobile-menu/mobile-menu-navigation-links'
import { MobileMenuStoreProvider } from '@/components/layouts/app/header/mobile-menu/mobile-menu-store-provider'
import { NavigationLinkItem } from '@/components/layouts/app/header/navigation-link-items'
import { ThemeToggleGroup } from '@/components/theme/theme-toggle-group'
import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { UserProfileAvatarFallback } from '@/components/user/user-profile-avatar-fallback'
import { UserProfileAvatarLoading } from '@/components/user/user-profile-avatar-loading'
import { ChevronRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export interface MobileMenuProps {
  navigationLinks?: NavigationLinkItem[]
}

export function MobileMenu({ navigationLinks }: MobileMenuProps) {
  return (
    <MobileMenuStoreProvider>
      <MobileMenuDialog>
        <DialogTrigger className="md:hidden" asChild>
          <Button variant="secondary" size="icon">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </DialogTrigger>
        <MobileMenuDialogContent>
          <BalayLogo className="h-10" />
          <MobileMenuNavigationLinks items={navigationLinks} />
          <hr />
          <Link
            href="/account"
            className="flex items-center justify-between gap-2.5 rounded-2xl border p-4 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800">
            <ErrorBoundary fallback={<UserProfileAvatarFallback />}>
              <Suspense fallback={<UserProfileAvatarLoading />}>
                <AuthUserProfileAvatar />
              </Suspense>
            </ErrorBoundary>
            <ChevronRight className="h-5 w-5" />
          </Link>
          <ThemeToggleGroup />
          <Button asChild variant="ghost">
            <AuthLogoutButton>Logout</AuthLogoutButton>
          </Button>
        </MobileMenuDialogContent>
      </MobileMenuDialog>
    </MobileMenuStoreProvider>
  )
}
