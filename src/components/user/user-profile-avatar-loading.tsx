import { Skeleton } from '@/components/ui/skeleton'
import { UserAvatarLoading } from '@/components/user/user-avatar-loading'
import { cn } from '@/lib/utils/class-name'
import { forwardRef, HTMLAttributes } from 'react'

export const UserProfileAvatarLoading = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex gap-2.5', className)} {...props}>
      <UserAvatarLoading />
      <div className="flex flex-col gap-1">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  )
)
UserProfileAvatarLoading.displayName = UserProfileAvatarLoading.name
