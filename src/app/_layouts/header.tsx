import { HiddenOnPath } from '@/components/ui/hidden-on-path'
import { UserAuth } from '@/components/user/user-auth'
import { cn } from '@/lib/utils/class-name'
import Link from 'next/link'

export interface HeaderProps {
  light?: boolean
}

export function Header({ light }: HeaderProps) {
  return (
    <header className="relative z-10 h-20">
      <div
        className={cn(
          'container sticky h-full max-w-full border-neutral-200',
          light ? 'text-white' : 'border-b'
        )}>
        <div className="flex h-full items-center gap-4 py-4">
          <Link href="/" className="shrink-0 text-xl font-bold">
            Balay
          </Link>
          <div className="flex h-full flex-1 items-center justify-between">
            <nav>nav links here</nav>
            <HiddenOnPath path="/login">
              <UserAuth />
            </HiddenOnPath>
          </div>
        </div>
      </div>
    </header>
  )
}
