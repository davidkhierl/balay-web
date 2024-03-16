import { AppProviders } from '@/components/providers/app-providers'
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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
