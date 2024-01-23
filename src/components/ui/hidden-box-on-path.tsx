'use client'

import { cn } from '@/lib/utils/class-name'
import { usePathname } from 'next/navigation'
import * as React from 'react'

export interface HiddenBoxOnPathProps {
  path: string
}

const HiddenBoxOnPath = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & HiddenBoxOnPathProps
>(({ className, path, ...props }, ref) => {
  const pathname = usePathname()

  return <div ref={ref} className={cn(pathname === path && 'hidden', className)} {...props} />
})

HiddenBoxOnPath.displayName = 'HiddenBoxOnPath'

export { HiddenBoxOnPath }
