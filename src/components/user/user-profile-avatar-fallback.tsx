import { UserAvatarFallback } from '@/components/user/user-avatar-fallback'
import { cn } from '@/lib/utils/class-name'
import { forwardRef, HTMLAttributes } from 'react'

export const UserProfileAvatarFallback = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex gap-2.5', className)} {...props}>
      <UserAvatarFallback />
      <div className="flex flex-col gap-1">
        <span className="flex h-6 items-center rounded-md bg-red-100 px-2 text-xs text-red-700 dark:bg-red-800 dark:text-red-200">
          Error loading user profile
        </span>
      </div>
    </div>
  )
)
UserProfileAvatarFallback.displayName = UserProfileAvatarFallback.name
