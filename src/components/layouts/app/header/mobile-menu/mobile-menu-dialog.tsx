'use client'

import { useMobileMenuStore } from '@/components/layouts/app/header/mobile-menu/mobile-menu-store-provider'
import { Dialog } from '@/components/ui/dialog'
import { ReactNode } from 'react'

export interface MobileMenuDialogProps {
  children?: ReactNode
}

export function MobileMenuDialog({ children }: MobileMenuDialogProps) {
  const { isOpen, toggleIsOpen } = useMobileMenuStore((state) => ({
    isOpen: state.isOpen,
    toggleIsOpen: state.toggleIsOpen,
  }))

  return (
    <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
      {children}
    </Dialog>
  )
}
