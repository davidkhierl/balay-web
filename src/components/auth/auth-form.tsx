'use client'
import { createClient } from '@/lib/supabase/client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function AuthForm() {
  const supabase = createClient()

  return (
    <Auth
      supabaseClient={supabase}
      providers={['google']}
      redirectTo="http://localhost:3000/auth/callback"
      appearance={{ theme: ThemeSupa }}
    />
  )
}
