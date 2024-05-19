import { createStore, type StoreApi } from 'zustand'

/**
 * Represents the state of a mobile-menu menu.
 *
 * @property {boolean} isOpen - Indicates whether the mobile-menu menu is open or not.
 */
export type MobileMenuState = {
  isOpen: boolean
}

/**
 * Represents a set of actions for manipulating a mobile-menu menu store.
 *
 * @property {function} toggleIsOpen - Toggles the state of the mobile-menu menu to open or close.
 * @param {boolean} isOpen - Optional. The desired state of the mobile-menu menu. If not provided, the state will be toggled.
 * @returns {void}
 */
export type MobileMenuActions = {
  toggleIsOpen: (isOpen?: MobileMenuState['isOpen']) => void
}

/**
 * Represents the Mobile Menu Store class that combines the MobileMenuState and MobileMenuActions types.
 *
 * @extends {MobileMenuState} - The state of the mobile-menu menu.
 * @extends {MobileMenuActions} - The actions that can be performed on the mobile-menu menu.
 */
export type MobileMenuStore = MobileMenuState & MobileMenuActions

/**
 * Initializes the mobile-menu menu store.
 *
 * @returns {MobileMenuState} The initial state of the mobile-menu menu store.
 */
export const initMobileMenuStore = (): MobileMenuState => {
  return { isOpen: false }
}

/**
 * The default initial state for the mobile-menu menu.
 *
 * @type {MobileMenuState}
 * @property {boolean} isOpen - Indicates whether the mobile-menu menu is open or not. Default value is false.
 */
const defaultInitState: MobileMenuState = {
  isOpen: false,
}

/**
 * Creates a mobile-menu menu store.
 *
 * @param {MobileMenuState} [initState=defaultInitState] - The initial state of the mobile-menu menu store.
 * @returns {StoreApi<MobileMenuStore>} - The created mobile-menu menu store.
 */
export const createMobileMenuStore = (
  initState: MobileMenuState = defaultInitState
): StoreApi<MobileMenuStore> =>
  createStore<MobileMenuStore>((set) => ({
    ...initState,
    toggleIsOpen: (isOpen) => set((state) => ({ isOpen: isOpen ?? !state.isOpen })),
  }))
