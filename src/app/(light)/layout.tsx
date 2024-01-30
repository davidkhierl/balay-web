import { Header } from '@/app/_layouts/header'
import * as React from 'react'

export default function LightLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Header light />
      {children}
    </>
  )
}
