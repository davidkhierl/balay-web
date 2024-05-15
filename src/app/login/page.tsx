import { AuthGoogleSignIn } from '@/components/auth/auth-google-sign-in'
import { ThemeToggleButton } from '@/components/theme/theme-toggle-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getURL } from '@/lib/utils/get-url'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Balay',
  description: 'Login to Balay',
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: { [_key: string]: string | string[] | undefined }
}) {
  const next = Array.isArray(searchParams.next) ? searchParams.next[0] : searchParams.next
  const redirectTo = new URL('/auth/callback', getURL())
  if (next) redirectTo.searchParams.append('next', next)
  return (
    <main className="relative h-dvh">
      <div className="container relative flex h-full flex-col items-center justify-center gap-4 py-4">
        <Card>
          <CardHeader>
            <CardTitle>Sign up in one click</CardTitle>
            <CardDescription>Continue to Balay using your existing social account!</CardDescription>
          </CardHeader>
          <CardContent>
            <AuthGoogleSignIn className="w-full" redirectTo={redirectTo.toString()} />
          </CardContent>
          <CardFooter>
            <p className="text-xs font-light text-slate-500">
              By continuing, you agree to Balay&apos;s Terms of User. Read our Privacy Policy
            </p>
          </CardFooter>
        </Card>
        <ThemeToggleButton />
      </div>
    </main>
  )
}
