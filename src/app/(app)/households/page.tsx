import { Button } from '@/components/ui/button'
import { getCurrentUserHouseholds } from '@/lib/services/household/get-current-user-households'
import { createClient } from '@/lib/supabase/server'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

export default async function HouseholdsPage() {
  const supabase = createClient()
  const { data: households, error, count } = await getCurrentUserHouseholds(supabase)

  if (error) throw error

  if (!count)
    return (
      <div>
        <div className="flex min-h-[calc(100dvh_-_64px)] items-center justify-center">
          <div>
            <h2 className="text-4xl">No Household</h2>
            <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center">
              <Button asChild className="w-full">
                <Link href="/households/new">Create</Link>
              </Button>
              <span className="text-center text-xs">or</span>
              <Button asChild className="w-full" variant="outline">
                <Link href="/households/new">Join</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className="app-page container grid auto-rows-[96px] gap-5 py-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-neutral-200 dark:border-neutral-800">
        <PlusCircle className="h-12 w-12 text-neutral-200 dark:text-neutral-800" />
      </div>
      {households.map((household) => (
        <div key={household.id}>{household.name}</div>
      ))}
    </div>
  )
}
