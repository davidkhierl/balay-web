import BalayLogo from '@/assets/icons/balay-logo.svg'

export default function AppLoading() {
  return (
    <div className="app-page container flex flex-col items-center justify-center py-8">
      <div className="mb-5 w-full max-w-md">
        <BalayLogo className="animate-pulse text-neutral-500" />
      </div>
    </div>
  )
}
