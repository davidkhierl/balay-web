'use client'

import { logout } from '@/actions/auth/logout.actions'
import { ButtonHTMLAttributes, forwardRef, MouseEventHandler } from 'react'

export const AuthLogoutButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = async (_event) => {
    await logout()
  }
  return (
    <button ref={ref} type="button" {...props} onClick={handleOnClick}>
      {children ?? 'Logout'}
    </button>
  )
})
AuthLogoutButton.displayName = 'AuthLogoutButton'
