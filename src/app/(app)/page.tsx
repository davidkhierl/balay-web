import { HouseholdInitialCreate } from '@/components/households/household-initial-create'
import { getCurrentUser } from '@/lib/services/auth/get-current-user'
import { userHouseholds } from '@/lib/services/household/user-households'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = createClient()
  const user = await getCurrentUser(supabase)
  const { data: households } = await userHouseholds(user.id, supabase)

  if (!households?.length)
    return (
      <div className="container flex min-h-[calc(100vh_-_80px)] items-center justify-center py-4">
        <HouseholdInitialCreate />
      </div>
    )

  return (
    <div>
      {households.map((household) => (
        <div key={household.id}>{household.id}</div>
      ))}
    </div>
  )
}
