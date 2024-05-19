import BalayLogo from '@/assets/icons/balay-logo.svg'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default async function HomePage() {
  return (
    <div className="h-[calc(100dvh_-_64px)] py-8">
      <div className="container flex h-full flex-col items-center justify-center rounded-lg bg-neutral-50 shadow-md">
        <h1 className="text-center text-lg md:text-3xl">Making Shared Living a Breeze</h1>
        <BalayLogo className="w-full max-w-lg" />
        <Button
          asChild
          className="mt-5"
          icon={<ChevronRight className="h-5 w-5" />}
          iconPlacement="right">
          <Link href="/households">Your Households</Link>
        </Button>
      </div>
    </div>
  )
}
