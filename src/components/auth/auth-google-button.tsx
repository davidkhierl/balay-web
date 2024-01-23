'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import * as React from 'react'
import { MouseEventHandler } from 'react'
import { FcGoogle } from 'react-icons/fc'

const AuthGoogleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, ...props }, ref) => {
    const supabase = createClient()

    const handleGoogleSignIn: MouseEventHandler<HTMLButtonElement> = async (event) => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: 'http://localhost:3000/auth/callback' },
      })
      console.log(data, error)

      if (onClick) onClick(event)
    }

    return (
      <Button ref={ref} variant="secondary" {...props} onClick={handleGoogleSignIn}>
        <FcGoogle />
        <span>Continue with Google</span>
      </Button>
    )
  }
)

AuthGoogleButton.displayName = 'AuthGoogleButton'

export { AuthGoogleButton }
