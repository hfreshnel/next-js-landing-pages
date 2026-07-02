import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const body = await request.json() as { firstName?: string; email?: string; project?: string }
  const { firstName, email, project } = body

  if (!firstName || !email || !project) {
    return NextResponse.json({ success: false, message: 'Champs manquants.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? 'HFreshnel <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? 'hfreshnel@gmail.com',
    replyTo: email,
    subject: `Nouveau projet - ${firstName}`,
    text: `Prénom: ${firstName}\nEmail: ${email}\n\nProjet:\n${project}`,
  })

  if (error) {
    console.error('[contact]', error)
    return NextResponse.json({ success: false, message: "Erreur d'envoi." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
