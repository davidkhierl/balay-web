import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils/class-name'
import { Tables } from '@/types/database.types'

export function HouseholdCard({
  className,
  household,
}: {
  className?: string
  household: Tables<'households'>
}) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{household.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{household.address}</p>
      </CardContent>
    </Card>
  )
}
