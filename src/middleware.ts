import { updateSession } from '@/lib/supabase/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const LOGIN_PATH = '/login'
const HOME_PATH = '/'

export async function middleware(request: NextRequest) {
  try {
    const { auth, response } = await updateSession(request)
    const user = auth.data.user
    const requestedPathname = request.nextUrl.pathname

    if (user && requestedPathname === LOGIN_PATH)
      return NextResponse.redirect(new URL(HOME_PATH, request.url))

    if (!user && requestedPathname !== LOGIN_PATH) {
      const redirectUrl = new URL(LOGIN_PATH, request.url)
      if (requestedPathname !== HOME_PATH)
        redirectUrl.searchParams.append('next', requestedPathname)
      return NextResponse.redirect(redirectUrl)
    }

    return response
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url))
  }
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
