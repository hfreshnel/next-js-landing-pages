import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('scrapbook_auth')?.value
  const isAuthenticated = !!token && token === process.env.SCRAPBOOK_PASSWORD

  if (!isAuthenticated) {
    const loginUrl = new URL('/scrapbook/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/scrapbook', '/scrapbook/((?!login).*)'],
}
