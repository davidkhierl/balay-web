import { AppHeader } from '@/components/layouts/app-header'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  )
}
