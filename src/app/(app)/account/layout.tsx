import { ReactNode } from 'react'

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Account</div>
      {children}
    </div>
  )
}
