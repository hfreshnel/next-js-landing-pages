import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Limite simple par adresse IP, en mémoire de l'instance : suffisant contre les envois en rafale.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 3
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as {
    name?: string
    email?: string
    message?: string
    company?: string
  }
  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  // Champ piège rempli : on répond comme si tout allait bien, sans rien envoyer.
  if (body.company) return NextResponse.json({ success: true })

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: 'Tous les champs sont requis.' }, { status: 400 })
  }
  if (!EMAIL.test(email) || name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ success: false, message: 'Champs invalides.' }, { status: 400 })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  if (rateLimited(ip)) {
    return NextResponse.json({ success: false, message: 'Trop de messages envoyés, réessayez plus tard.' }, { status: 429 })
  }

  // Client créé à l'envoi : sans clé, le build passe et la route répond une erreur claire.
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY manquante')
    return NextResponse.json({ success: false, message: "Envoi indisponible pour le moment, écrivez-moi par e-mail." }, { status: 503 })
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? 'hfreshnel@gmail.com',
    replyTo: email,
    subject: `Portfolio : message de ${name}`,
    text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`,
  })

  if (error) {
    console.error('[contact]', error)
    return NextResponse.json({ success: false, message: "Erreur d'envoi." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
