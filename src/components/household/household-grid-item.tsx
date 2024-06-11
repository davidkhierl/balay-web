import { Household } from '@/lib/schema/household.schema'
import { cn } from '@/lib/utils/class-name'
import Link from 'next/link'

export interface HouseholdGridItemProps {
  household: Household
  className?: string
}

export function HouseholdGridItem({ className, household }: HouseholdGridItemProps) {
  return (
    <div className={cn('group relative', className)}>
      <div className="relative h-full rounded-lg border border-neutral-200 px-6 py-5 transition-colors group-hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:group-hover:border-neutral-700">
        <p className="text-sm">{household.name}</p>
        <p className="text-sm text-neutral-500">{household.address}</p>
      </div>
      <Link
        href={`/households/${household.id}`}
        className="absolute inset-0 flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-50">
        <span className="sr-only">Navigate to ${household.name}</span>
      </Link>
    </div>
  )
}
