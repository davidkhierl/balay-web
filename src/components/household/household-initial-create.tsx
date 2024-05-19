'use client'

import { HouseholdCreateForm } from '@/components/household/household-create-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function HouseholdInitialCreate() {
  return (
    <Card className="md:min-w-96">
      <CardHeader>
        <CardTitle>Create Household</CardTitle>
      </CardHeader>
      <CardContent>
        <HouseholdCreateForm />
      </CardContent>
    </Card>
  )
}
