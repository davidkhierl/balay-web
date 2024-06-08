import BalayLogo from '@/assets/icons/balay-logo.svg'

export default async function HomePage() {
  return (
    <div className="app-page container flex flex-col items-center justify-center py-8">
      <div className="mb-5 w-full max-w-md">
        <BalayLogo />
      </div>
    </div>
  )
}
