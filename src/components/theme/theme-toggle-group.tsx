'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggleGroup() {
  const { theme, setTheme } = useTheme()

  return (
    <ToggleGroup type="single" value={theme} onValueChange={setTheme}>
      <ToggleGroupItem value="light">
        <Sun className="h-4 w-4" />
        <span className="sr-only">light</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="dark">
        <Moon className="h-4 w-4" />
        <span className="sr-only">dark</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="system">
        <Monitor className="h-4 w-4" />
        <span className="sr-only">system</span>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
