import { beforeEach, expect, test } from 'vitest'
import { StoreApi } from 'zustand'
import { MobileMenuState, MobileMenuStore, createMobileMenuStore } from './mobile-menu-store'

// Define a default initial state for use in multiple tests
const defaultInitState: MobileMenuState = {
  isOpen: false,
}

// Set up a helper function to reset the store to its default state before each test
let store: StoreApi<MobileMenuStore>
beforeEach(() => {
  store = createMobileMenuStore(defaultInitState)
})

// Begin writing tests
test('createMobileMenuStore creates a store with the correct initial state', () => {
  expect(store.getState().isOpen).toBe(defaultInitState.isOpen)
})

test('createMobileMenuStore creates a store where toggleIsOpen toggles the isOpen property', () => {
  store.getState().toggleIsOpen()
  expect(store.getState().isOpen).toBe(!defaultInitState.isOpen)
})

test('createMobileMenuStore creates a store where toggleIsOpen sets isOpen to specified value', () => {
  const newOpenState = !defaultInitState.isOpen
  store.getState().toggleIsOpen(newOpenState)
  expect(store.getState().isOpen).toBe(newOpenState)
})
