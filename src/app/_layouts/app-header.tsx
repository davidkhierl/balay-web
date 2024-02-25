import BalayLogo from '@/assets/icons/balay-logo.svg'
import { UserAuth } from '@/components/user/user-auth'
import { cn } from '@/lib/utils/class-name'
import Image from 'next/image'
import Link from 'next/link'

export interface HeaderProps {
  className?: string
}

export function AppHeader({ className }: HeaderProps) {
  return (
    <header className="relative h-20">
      <div
        className={cn(
          'container flex h-full max-w-full items-center justify-between border-b border-neutral-200',
          className
        )}>
        <div className="max-w-24">
          <Link href="/" className="shrink-0 text-xl font-bold">
            <Image src={BalayLogo} alt="Balay logo" priority />
            <span className="sr-only">Balay home page</span>
          </Link>
        </div>
        <nav>nav links</nav>
        <UserAuth />
      </div>
    </header>
  )
}
