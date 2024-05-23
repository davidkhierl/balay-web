import { cn } from '@/lib/utils/class-name'
import { HeartCrack } from 'lucide-react'
import { HTMLAttributes, forwardRef } from 'react'

export const UserAvatarFallback = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      title="Something went wrong"
      className={cn(
        'flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200',
        className
      )}
      {...props}>
      <HeartCrack />
      <span className="sr-only">Something went wrong loading user avatar</span>
    </div>
  )
)
UserAvatarFallback.displayName = UserAvatarFallback.name
