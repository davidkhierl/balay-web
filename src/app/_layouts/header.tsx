import { AuthGoogleButton } from '@/components/auth/auth-google-button'

export function Header() {
  return (
    <header className="h-16">
      <div className="container sticky h-full max-w-full shadow-md shadow-slate-300/50">
        <div className="flex h-full items-center gap-4 py-4">
          <h1 className="shrink-0 text-xl font-bold">Balay</h1>
          <div className="flex h-full flex-1 items-center justify-between">
            <nav>nav links here</nav>
            <div>
              <AuthGoogleButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
