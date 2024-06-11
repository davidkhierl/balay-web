import { HouseholdGridItem } from '@/components/household/household-grid-item'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
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
    <div className="app-page container max-w-screen-2xl">
      <section className="grid auto-rows-[96px] grid-cols-1 gap-10 py-10 md:grid-cols-[repeat(auto-fill,minmax(330px,1fr))]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                className="flex h-24 items-center justify-center rounded-md border border-dashed border-neutral-200 text-neutral-200 hover:border-neutral-300 hover:bg-transparent hover:text-neutral-300 dark:border-neutral-800 dark:text-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-950 dark:hover:text-neutral-700">
                <Link href="/households/new">
                  <PlusCircle className="h-12 w-12" strokeWidth={1} />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create new household</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {households.map((household) => (
          <HouseholdGridItem key={household.id} household={household} />
        ))}
      </section>
    </div>
  )
}
