'use client'

import { createHouseholdAction } from '@/actions/households/create-household-action'
import { FormSubmitButton } from '@/components/forms/form-submit-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
} from '@/components/ui/form'
import { GeocodingInput } from '@/components/ui/geocoding-input'
import { Input } from '@/components/ui/input'
import { useFormState } from 'react-dom'

export function HouseholdInitialCreate() {
  const [state, formAction] = useFormState(createHouseholdAction, { errors: {} })
  return (
    <Card className="md:min-w-96">
      <CardHeader>
        <CardTitle>Create Household</CardTitle>
        <CardDescription>Start by creating your household</CardDescription>
      </CardHeader>
      <Form action={formAction}>
        <CardContent className="space-y-4">
          <FormField name="name" serverInvalid={!!state.errors?.name}>
            <FormLabel>Name</FormLabel>
            <FormControl asChild>
              <Input name="name" className="group-[invalid]:border-red-500" />
            </FormControl>
            {state.errors?.name && <FormMessage>{state.errors.name}</FormMessage>}
          </FormField>
          <FormField
            name="location"
            serverInvalid={
              !!state.errors?.location ||
              !!state.errors?.lat ||
              !!state.errors?.lng ||
              !!state.errors?.placeId
            }>
            <FormLabel>Location</FormLabel>
            <FormControl asChild>
              <GeocodingInput
                name="location"
                className="group-[invalid]:border-red-500"
                placeholder="Search location"
              />
            </FormControl>
            {state.errors?.location && <FormMessage>{state.errors.location}</FormMessage>}
            {(state.errors?.lat || state.errors?.lng || state.errors?.placeId) && (
              <FormMessage>Please set the location</FormMessage>
            )}
          </FormField>
          <FormField name="address" serverInvalid={!!state.errors?.address}>
            <FormLabel>Address</FormLabel>
            <FormControl asChild>
              <Input name="address" className="group-[invalid]:border-red-500" />
            </FormControl>
            {state.errors?.address && <FormMessage>{state.errors.address}</FormMessage>}
          </FormField>
        </CardContent>
        <CardFooter>
          <FormSubmit asChild>
            <FormSubmitButton className="ml-auto">Create</FormSubmitButton>
          </FormSubmit>
        </CardFooter>
      </Form>
    </Card>
  )
}
