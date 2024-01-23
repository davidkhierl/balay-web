import { createClient } from '@/lib/supabase/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // redirect user to homepage when visiting to /login path
  if (user && request.nextUrl.pathname === '/login')
    return NextResponse.redirect(new URL('/', request.url))

  // redirect to login page if not authenticated except for / path
  if (!user && request.nextUrl.pathname !== '/login' && !user && request.nextUrl.pathname !== '/')
    return NextResponse.redirect(new URL('/login', request.url))

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|auth/callback).*)',
  ],
}
