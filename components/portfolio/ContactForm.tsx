'use client'

import { useState, type FormEvent } from 'react'

type Status = { kind: 'idle' | 'sending' | 'sent' | 'error'; message?: string }

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string }
      if (!res.ok || !json.success) throw new Error(json.message)
      form.reset()
      setStatus({ kind: 'sent', message: 'Message envoyé. Je vous réponds rapidement.' })
    } catch (err) {
      const message = err instanceof Error && err.message ? err.message : "L'envoi a échoué."
      setStatus({ kind: 'error', message: `${message} Vous pouvez aussi m'écrire directement par e-mail.` })
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="c-name">Nom</label>
        <input id="c-name" name="name" autoComplete="name" required maxLength={120} />
      </div>
      <div className="field">
        <label htmlFor="c-email">E-mail</label>
        <input id="c-email" name="email" type="email" autoComplete="email" required maxLength={200} />
      </div>
      <div className="field">
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" name="message" required maxLength={5000} />
      </div>
      {/* Champ piège : invisible pour un humain, rempli par les robots. */}
      <div className="trap" aria-hidden="true">
        <label htmlFor="c-company">Société</label>
        <input id="c-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn" type="submit" disabled={status.kind === 'sending'}>
        {status.kind === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>
      <p className="form-status" role="status" aria-live="polite" data-kind={status.kind}>
        {status.message ?? ''}
      </p>
    </form>
  )
}
