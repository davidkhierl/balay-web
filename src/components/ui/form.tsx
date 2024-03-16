import { cn } from '@/lib/utils/class-name'
import * as FormPrimitive from '@radix-ui/react-form'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

const Form = forwardRef<
  ElementRef<typeof FormPrimitive.Root>,
  ComponentPropsWithoutRef<typeof FormPrimitive.Root>
>((props, ref) => {
  return <FormPrimitive.Root ref={ref} {...props} />
})
Form.displayName = 'Form'

const FormField = forwardRef<
  ElementRef<typeof FormPrimitive.Field>,
  ComponentPropsWithoutRef<typeof FormPrimitive.Field>
>(({ className, ...props }, ref) => {
  return <FormPrimitive.Field ref={ref} className={cn('group space-y-2', className)} {...props} />
})
FormField.displayName = 'FormField'

const FormLabel = forwardRef<
  ElementRef<typeof FormPrimitive.Label>,
  ComponentPropsWithoutRef<typeof FormPrimitive.Label>
>(({ className, ...props }, ref) => {
  return (
    <FormPrimitive.Label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 data-[invalid]:text-red-500',
        className
      )}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

const FormMessage = forwardRef<
  ElementRef<typeof FormPrimitive.Message>,
  ComponentPropsWithoutRef<typeof FormPrimitive.Message>
>(({ className, children, ...props }, ref) => {
  return (
    <FormPrimitive.Message ref={ref} asChild {...props}>
      <p
        className={cn(
          'text-sm text-violet-600 peer-invalid:text-red-500 group-data-[invalid]:text-red-500',
          className
        )}>
        {children}
      </p>
    </FormPrimitive.Message>
  )
})
FormMessage.displayName = 'FormMessage'

const FormControl = FormPrimitive.Control
const FormSubmit = FormPrimitive.Submit
const FormValidityState = FormPrimitive.ValidityState

export { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit, FormValidityState }
