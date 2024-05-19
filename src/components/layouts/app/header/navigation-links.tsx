'use client'

import { NavigationLinkItem } from '@/components/layouts/app/header/navigation-link-items'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNextLink,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils/class-name'
import { usePathname } from 'next/navigation'

export interface NavigationLinksProps {
  className?: string
  items?: NavigationLinkItem[]
}

export function NavigationLinks({ className, items }: NavigationLinksProps) {
  const pathname = usePathname()
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        {items?.map((item) => (
          <NavigationMenuItem key={item.path}>
            <NavigationMenuNextLink
              href={item.path}
              active={item.exact ? pathname === item.path : pathname.startsWith(item.path)}>
              {item.name}
            </NavigationMenuNextLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
