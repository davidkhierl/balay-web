'use server'

import { HouseholdCreate, HouseholdCreateSchema } from '@/lib/schema/household.schema'
import { getAuthUser } from '@/lib/services/auth/get-auth-user'
import { createHousehold } from '@/lib/services/household/create-household'
import { createHouseholdMember } from '@/lib/services/household/create-household-member'
import { createClient } from '@/lib/supabase/server'
import { ServerActionError, ServerActionErrorField } from '@/types/server-actions.types'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

/**
 * Perform the action of creating a new household.
 *
 * @async
 * @param {any} prevState - The previous state.
 * @param {FormData} formData - The form data for creating a household.
 * @return {Promise<ServerActionErrorField<HouseholdCreate> | ServerActionError>} - A promise that resolves to either the validation errors or the error message, if any.
 */
export async function householdCreateAction(
  prevState: any,
  formData: FormData
): Promise<ServerActionErrorField<HouseholdCreate> | ServerActionError> {
  // Parse form data with HouseholdCreateSchema
  const validatedFields = HouseholdCreateSchema.safeParse({
    name: formData.get('name'),
    address: formData.get('address'),
    user_id: formData.get('user_id'),
  })

  // Check if the field validation was successful
  if (!validatedFields.success) {
    // If not successful, return the validation errors
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Create an instance of Supabase client
  const supabase = createClient()

  // Get the authenticated user
  const user = await getAuthUser(supabase)

  // Create a new household with the validated data and get the result
  const { data: household, error: householdError } = await createHousehold(
    { ...validatedFields.data, user_id: user.id },
    supabase
  )

  // Check if there was an error while creating household
  if (householdError) {
    // If so, return the error message
    return { errors: { server: householdError.message } }
  }

  // Log the creation of the household
  console.log('Household created', household.id, household.name)

  // Create a new household member and get the result
  const { data: householdMember, error: householdMemberError } = await createHouseholdMember(
    { user_id: user.id, household_id: household.id },
    supabase
  )

  // Check if there was an error while creating household member
  if (householdMemberError) {
    // If so, return the error message
    return { errors: { server: householdMemberError.message } }
  }

  // update the necessary path
  revalidatePath('/households')

  // Redirect to the newly created household
  redirect(`/households/${household.id}`)
}
