'use client'

import { cn } from '@/lib/utils/class-name'
import { usePathname } from 'next/navigation'
import * as React from 'react'

export interface HiddenOnPathProps {
  path: string
}

const HiddenOnPath = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & HiddenOnPathProps
>(({ className, path, ...props }, ref) => {
  const pathname = usePathname()

  return <div ref={ref} className={cn(pathname === path && 'hidden', className)} {...props} />
})

HiddenOnPath.displayName = 'HiddenOnPath'

export { HiddenOnPath }
