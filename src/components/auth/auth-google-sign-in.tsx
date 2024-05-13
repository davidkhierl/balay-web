'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { AuthError } from '@supabase/supabase-js'
import * as React from 'react'
import { MouseEventHandler } from 'react'
import { FcGoogle } from 'react-icons/fc'

export interface AuthGoogleSignInProps {
  redirectTo: string
  onError?: (error: AuthError) => void
}

const OAUTH_PROVIDER = 'google'

const AuthGoogleSignIn = React.forwardRef<HTMLButtonElement, ButtonProps & AuthGoogleSignInProps>(
  ({ onClick, onError, redirectTo, ...props }, ref) => {
    const supabaseClient = createClient()

    const handleGoogleSignIn: MouseEventHandler<HTMLButtonElement> = async (event) => {
      supabaseClient.auth
        .signInWithOAuth({
          provider: OAUTH_PROVIDER,
          options: {
            redirectTo,
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
        })
        .catch((error) => onError && onError(error))

      onClick && onClick(event)
    }

    return (
      <Button ref={ref} variant="secondary" {...props} onClick={handleGoogleSignIn}>
        <FcGoogle size={24} />
        <span>Continue with Google</span>
      </Button>
    )
  }
)

AuthGoogleSignIn.displayName = 'AuthGoogleSignIn'

export { AuthGoogleSignIn }
