import { getHousehold } from '@/lib/services/household/get-household'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function HouseholdPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: household } = await getHousehold(params.id, supabase)

  if (!household) notFound()

  return (
    <div>
      <div className="container flex gap-5">{household.name}</div>
    </div>
  )
}
