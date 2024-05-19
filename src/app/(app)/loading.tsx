import BalayLogo from '@/assets/icons/balay-logo.svg'

export default function AppLoading() {
  return (
    <div className="container flex h-[calc(100dvh_-_64px)] flex-col items-center justify-center py-8">
      <div className="mb-5 w-full max-w-md">
        <BalayLogo className="animate-pulse" />
      </div>
    </div>
  )
}
