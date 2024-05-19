'use client'

import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeDropdownRadioGroup() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
      <DropdownMenuRadioItem value="light">
        <Sun className="mr-2 h-4 w-4" />
        Light
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="dark">
        <Moon className="mr-2 h-4 w-4" />
        Dark
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="system">
        <Monitor className="mr-2 h-4 w-4" />
        System
      </DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  )
}
