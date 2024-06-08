import { Skeleton } from '@/components/ui/skeleton'

export default function HouseholdNewLoading() {
  return (
    <div className="app-page container flex max-w-full items-center justify-center py-4">
      <Skeleton className="h-[330px] w-full max-w-[384px] rounded-lg" />
    </div>
  )
}
