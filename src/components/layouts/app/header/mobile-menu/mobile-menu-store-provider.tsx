'use client'

import {
  createMobileMenuStore,
  MobileMenuStore,
} from '@/components/layouts/app/header/mobile-menu/mobile-menu-store'
import { createContext, ReactNode, useContext, useRef } from 'react'
import { useStore, type StoreApi } from 'zustand'

/**
 * MobileMenuStoreContext
 *
 * A React context for managing the store of the mobile-menu menu.
 *
 * @template {StoreApi<MobileMenuStore> | null} T - The type of the context value
 */
export const MobileMenuStoreContext = createContext<StoreApi<MobileMenuStore> | null>(null)

/**
 * Represents the props for the MobileMenuStoreProvider component.
 */
export interface MobileMenuStoreProviderProps {
  children: ReactNode
}

/**
 * MobileMenuStoreProvider component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child elements.
 */
export const MobileMenuStoreProvider = ({ children }: MobileMenuStoreProviderProps) => {
  const storeRef = useRef<StoreApi<MobileMenuStore>>()
  if (!storeRef.current) {
    storeRef.current = createMobileMenuStore()
  }

  return (
    <MobileMenuStoreContext.Provider value={storeRef.current}>
      {children}
    </MobileMenuStoreContext.Provider>
  )
}

/**
 * Returns a selected value from the MobileMenuStore.
 *
 * @param {function} selector - A function that takes the MobileMenuStore and returns a selected value.
 * @throws {Error} - Throws an error if used outside the MobileMenuStoreProvider.
 * @returns {*} - The selected value from the MobileMenuStore.
 */
export const useMobileMenuStore = <T,>(selector: (store: MobileMenuStore) => T): T => {
  const mobileMenuStoreContext = useContext(MobileMenuStoreContext)

  if (!mobileMenuStoreContext)
    throw new Error('useMobileMenuStore must be use within MobileMenuStoreProvider')

  return useStore(mobileMenuStoreContext, selector)
}
