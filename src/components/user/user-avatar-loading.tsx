import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils/class-name'
import { forwardRef, HTMLAttributes } from 'react'

export const UserAvatarLoading = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} className={cn('h-14 w-14 rounded-full', className)} {...props} />
  )
)
UserAvatarLoading.displayName = UserAvatarLoading.name
