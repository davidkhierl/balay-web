import { HiddenBoxOnPath } from '@/components/ui/hidden-box-on-path'
import { UserAuth } from '@/components/user/user-auth'

export function Header() {
  return (
    <header className="h-16">
      <div className="container sticky h-full max-w-full shadow-md shadow-slate-300/50">
        <div className="flex h-full items-center gap-4 py-4">
          <h1 className="shrink-0 text-xl font-bold">Balay</h1>
          <div className="flex h-full flex-1 items-center justify-between">
            <nav>nav links here</nav>
            <HiddenBoxOnPath path="/login">
              <UserAuth />
            </HiddenBoxOnPath>
          </div>
        </div>
      </div>
    </header>
  )
}
