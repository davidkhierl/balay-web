import BalayLogo from '@/assets/icons/balay-logo.svg'
import { AuthUserMenu } from '@/components/auth/auth-user-menu'
import { MobileMenu } from '@/components/layouts/app/header/mobile-menu/mobile-menu'
import { navigationLinkItems } from '@/components/layouts/app/header/navigation-link-items'
import { NavigationLinks } from '@/components/layouts/app/header/navigation-links'
import { UserAvatarFallback } from '@/components/user/user-avatar-fallback'
import { cn } from '@/lib/utils/class-name'
import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'

export interface HeaderProps {
  className?: string
}

export function AppHeader({ className }: HeaderProps) {
  return (
    <header className={cn('app-header relative', className)}>
      <div className="container flex h-full max-w-full items-center justify-between gap-10 border-b border-neutral-200 px-2 dark:border-neutral-800 md:px-8">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-neutral-900 dark:text-neutral-200">
          <BalayLogo className="h-10" />
          <span className="sr-only">Balay home page</span>
        </Link>

        <div className="flex items-center justify-between md:flex-1">
          <div>
            <NavigationLinks className="hidden md:flex" items={navigationLinkItems} />
            <MobileMenu navigationLinks={navigationLinkItems} />
          </div>
          <div className="hidden items-center gap-2.5 md:flex">
            <ErrorBoundary fallback={<UserAvatarFallback className="h-10 w-10" />}>
              <AuthUserMenu className="h-10 w-10" />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </header>
  )
}
