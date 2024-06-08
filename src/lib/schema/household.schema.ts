import { Tables, TablesInsert } from '@/types/database.types'
import { z } from 'zod'

/**
 * Represents the schema for the household entity.
 *
 * @property {string} id - The unique identifier of the household.
 * @property {string} name - The name of the household.
 * @property {string} address - The address of the household.
 * @property {string} user_id - The user ID associated with the household.
 * @property {string} created_at - The date and time when the household was created.
 * @property {string} updated_at - The date and time when the household was last updated.
 */
export const HouseholdSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  address: z.string().min(1),
  user_id: z.string().min(1),
  created_at: z.string().min(1),
  updated_at: z.string().min(1),
}) satisfies z.ZodSchema<Tables<'households'>>

/**
 * Represents a household.
 */
export type Household = z.infer<typeof HouseholdSchema>

/**
 * Represents the schema for creating a household.
 */
export const HouseholdCreateSchema = HouseholdSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
}) satisfies z.ZodSchema<TablesInsert<'households'>>

/**
 * Represents the structure of a household for creation.
 */
export type HouseholdCreate = z.infer<typeof HouseholdCreateSchema>

/**
 * Represents the schema for a household member.
 *
 * @property {string} id - The unique identifier for the household member.
 * @property {string} household_id - The identifier for the household that the member belongs to.
 * @property {string} user_id - The identifier for the user associated with the household member.
 * @property {string} created_at - The timestamp when the household member was created.
 * @property {string} updated_at - The timestamp when the household member was last updated.
 */
export const HouseholdMemberSchema = z.object({
  id: z.string(),
  household_id: z.string(),
  user_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
}) satisfies z.ZodSchema<Tables<'household_members'>>

/**
 * Represents a household member.
 */
export type HouseholdMember = z.infer<typeof HouseholdMemberSchema>
