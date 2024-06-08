import { HouseholdCreateForm } from '@/components/household/household-create-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getCurrentUser } from '@/lib/services/user/get-current-user'
import { createClient } from '@/lib/supabase/server'

export default async function HouseholdNewPage() {
  const supabase = createClient()
  const { data: user, error } = await getCurrentUser(supabase)
  if (error) throw error
  return (
    <div className="app-page container flex max-w-full items-center justify-center py-4">
      <Card className="w-full max-w-96">
        <CardHeader>
          <CardTitle>Create Household</CardTitle>
        </CardHeader>
        <CardContent>
          <HouseholdCreateForm userId={user.id} />
        </CardContent>
      </Card>
    </div>
  )
}
