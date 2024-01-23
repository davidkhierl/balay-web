'use client'

import { createClient } from '@/lib/supabase/client'
import * as React from 'react'

const LogOutButton = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(
  ({ onClick, children, ...props }, ref) => {
    const supabase = createClient()

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
      await supabase.auth.signOut()

      if (onClick) onClick(event)
    }

    return (
      <button ref={ref} type="button" onClick={handleOnClick} {...props}>
        {children ?? 'Log out'}
      </button>
    )
  }
)
LogOutButton.displayName = 'LogOutButton'

export { LogOutButton }
