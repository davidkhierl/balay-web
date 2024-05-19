'use client'

import { useMobileMenuStore } from '@/components/layouts/app/header/mobile-menu/mobile-menu-store-provider'
import { NavigationLinkItem } from '@/components/layouts/app/header/navigation-link-items'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNextLink,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils/class-name'
import { usePathname } from 'next/navigation'

export interface MenuNavigationLinksProps {
  className?: string
  items?: NavigationLinkItem[]
}

export function MobileMenuNavigationLinks({ className, items }: MenuNavigationLinksProps) {
  const pathname = usePathname()
  const toggleIsOpen = useMobileMenuStore((state) => state.toggleIsOpen)
  return (
    <NavigationMenu
      className={cn('max-w-full flex-col items-stretch', className)}
      orientation="vertical">
      <NavigationMenuList className="flex-col items-stretch gap-1 space-x-0">
        {items?.map((item) => (
          <NavigationMenuItem key={item.path}>
            <NavigationMenuNextLink
              href={item.path}
              active={item.exact ? pathname === item.path : pathname.startsWith(item.path)}
              className="w-full justify-start text-base"
              onClick={() => toggleIsOpen(false)}>
              {item.name}
            </NavigationMenuNextLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
