import { AuthGoogleButton } from '@/components/auth/auth-google-button'

export function LoginForm() {
  return (
    <div className="flex flex-col items-stretch gap-4">
      <AuthGoogleButton />
    </div>
  )
}
