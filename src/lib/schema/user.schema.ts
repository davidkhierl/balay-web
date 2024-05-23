import { Tables } from '@/types/database.types'
import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  full_name: z.string(),
  avatar_url: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
}) satisfies z.ZodSchema<Tables<'users'>>

export type User = z.infer<typeof UserSchema>
