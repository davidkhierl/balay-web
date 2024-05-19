export interface NavigationLinkItem {
  name: string
  path: string
  exact?: boolean
}

export const navigationLinkItems: NavigationLinkItem[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
  },
  { name: 'Households', path: '/households' },
  { name: 'Calendar', path: '/calendar' },
]
