import { AppProviders } from '@/components/providers/app-providers'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import * as React from 'react'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Balay',
  description: 'Home sharing made easy',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable}`}>
        <noscript>
          <div className="p-2">
            <Alert variant="destructive">
              <AlertTitle>Javascript Disabled</AlertTitle>
              <AlertDescription>
                It seems like JavaScript is disabled in your browser. Unfortunately, this website
                relies heavily on JavaScript to function properly. Please enable JavaScript and
                reload the page to enjoy the full experience. Thank you!
              </AlertDescription>
            </Alert>
          </div>
        </noscript>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
