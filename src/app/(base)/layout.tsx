import { Header } from '@/app/_layouts/header'
import * as React from 'react'

export default function BaseLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
