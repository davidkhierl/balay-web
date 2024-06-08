'use client'

import { FormSubmitButton } from '@/components/forms/form-submit-button'
import { householdCreateAction } from '@/components/household/household-create-action'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { HouseholdCreate, HouseholdCreateSchema } from '@/lib/schema/household.schema'
import { cn } from '@/lib/utils/class-name'
import { isServerActionError } from '@/lib/utils/is-server-action-error'
import { objectToFormData } from '@/lib/utils/object-to-form-data'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'

export interface HouseholdCreateFormProps {
  className?: string
  userId: string
}

export function HouseholdCreateForm({ className, userId }: HouseholdCreateFormProps) {
  const [state, formAction] = useFormState(householdCreateAction, { errors: {} })
  const form = useForm<HouseholdCreate>({
    resolver: zodResolver(HouseholdCreateSchema),
    defaultValues: {
      name: '',
      address: '',
      user_id: userId,
    },
  })

  const handleSubmit = async (data: HouseholdCreate) => {
    formAction(objectToFormData(data))
  }

  useEffect(() => {
    if (!state.errors) return

    if (isServerActionError(state)) {
      form.setError('root', { type: 'server', message: state.errors.server })

      return
    }

    if (state.errors.address) {
      form.setError('address', { type: 'validate', message: state.errors.address[0] })
    }
    if (state.errors.name) {
      form.setError('name', { type: 'validate', message: state.errors.name[0] })
    }
  }, [form, state])

  return (
    <Form {...form}>
      <form
        className={cn(className)}
        onSubmit={(event) => {
          event.preventDefault()
          form.handleSubmit(handleSubmit)(event)
        }}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="household name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="household address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="user_id"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormSubmitButton type="submit">Create</FormSubmitButton>
        </div>
      </form>
    </Form>
  )
}
