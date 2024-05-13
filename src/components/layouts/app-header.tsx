import BalayLogo from '@/assets/icons/balay-logo.svg'
import { AuthUserMenu } from '@/components/auth/auth-user-menu'
import { cn } from '@/lib/utils/class-name'
import Link from 'next/link'

export interface HeaderProps {
  className?: string
}

export function AppHeader({ className }: HeaderProps) {
  return (
    <header className="relative h-20">
      <div
        className={cn(
          'container flex h-full max-w-full items-center justify-between border-b border-neutral-200 dark:border-neutral-800',
          className
        )}>
        <div className="max-w-24">
          <Link
            href="/"
            className="shrink-0 text-xl font-bold text-neutral-900 dark:text-neutral-200">
            <BalayLogo className="w-full" />
            <span className="sr-only">Balay home page</span>
          </Link>
        </div>
        <nav>nav links</nav>
        <div className="flex items-center gap-2.5">
          <AuthUserMenu />
        </div>
      </div>
    </header>
  )
}
