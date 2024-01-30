import LoginPageBG from '@/assets/images/login-bg.png'
import { LoginForm } from '@/components/forms/login-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Login | Balay',
  description: 'Login to Balay',
}

export default function LoginPage() {
  return (
    <main className="relative -mt-20 pt-20 supports-[height:100dvh]:h-[100dvh]">
      <Image
        src={LoginPageBG}
        alt="login page background image"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/80 to-transparent" />
      <div className="container relative flex h-full items-center justify-center py-4">
        <Card>
          <CardHeader>
            <CardTitle>Log in or sign up in one click</CardTitle>
            <CardDescription>Use your social account to continue with Balay!</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
