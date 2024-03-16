'use server'

import { getAuthUser } from '@/lib/services/auth/get-auth-user'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be 5 or more characters long' }),
  address: z.string().min(1, { message: 'Address is required' }),
  location: z.string().min(1, { message: 'Location is required' }),
  lat: z.string(),
  lng: z.string(),
  placeId: z.string(),
})

export async function createHouseholdAction(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    address: formData.get('address'),
    location: formData.get('location'),
    lat: formData.get('lat'),
    lng: formData.get('lng'),
    placeId: formData.get('placeId'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const supabase = createClient()
  const user = await getAuthUser(supabase)
  const { data } = await supabase
    .from('households')
    .insert({
      name: validatedFields.data.name,
      user_id: user.id,
      address: validatedFields.data.address,
      location: validatedFields.data.location,
      lat: validatedFields.data.lat,
      lng: validatedFields.data.lng,
      place_id: validatedFields.data.placeId,
    })
    .select()
  revalidatePath('/')
  return {
    data,
  }
}
