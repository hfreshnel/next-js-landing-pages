import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json() as { password?: string }
  const { password } = body

  if (!password || password !== process.env.SCRAPBOOK_PASSWORD) {
    return NextResponse.json({ success: false, message: 'Mot de passe incorrect.' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('scrapbook_auth', password, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
  return response
}
