import { getCurrentUser } from '@/lib/services/auth/get-current-user'
import { userHouseholds } from '@/lib/services/household/user-households'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function HouseholdsPage() {
  const supabase = createClient()
  const user = await getCurrentUser(supabase)
  const { data: households } = await userHouseholds(user.id, supabase)

  if (!households?.length) redirect('/households/new')

  return (
    <div className="flex min-h-[calc(100dvh_-_64px)] flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="divide-y divide-gray-200">
        {households.map((household) => (
          <div key={household.id}>{household.name}</div>
        ))}
      </div>
    </div>
  )
}
