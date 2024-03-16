'use client'

import { GoogleMapsProvider } from '@/components/providers/google-maps-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ReactNode } from 'react'

export function AppProviders({ children }: { children?: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <GoogleMapsProvider>{children}</GoogleMapsProvider>
    </ThemeProvider>
  )
}
