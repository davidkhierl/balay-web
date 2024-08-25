'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

export const FormSubmitButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { pending } = useFormStatus()

  return <Button ref={ref} type="submit" isLoading={pending} {...props} />
})
FormSubmitButton.displayName = 'FormSubmitButton'
