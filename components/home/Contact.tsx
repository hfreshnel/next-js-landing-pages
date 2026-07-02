'use client'

import { useState } from 'react'
import { T } from '@/lib/design'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.get('firstName'),
          email: data.get('email'),
          project: data.get('project'),
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" style={{ padding: `${T.spLg} 0`, borderTop: `1px solid ${T.border}` }}>
      <div className="wrap">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Vous avez un projet ?</h2>
        {submitted ? (
          <div style={{
            padding: T.spMd,
            border: `1px solid ${T.border}`,
            textAlign: 'center',
            maxWidth: T.maxConf,
          }}>
            <p style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: T.fsCard,
              color: T.accent,
              margin: `0 0 ${T.spXs}`,
            }}>
              Message envoyé.
            </p>
            <p style={{
              fontFamily: T.sans,
              fontSize: T.fsSm,
              fontWeight: 300,
              color: T.mid,
              margin: 0,
            }}>
              Je reviens vers vous sous 24h.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: T.maxForm }}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Prénom</label>
                <input type="text" name="firstName" placeholder="Hugo" className="form-input" required />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input type="email" name="email" placeholder="vous@domaine.com" className="form-input" required />
              </div>
            </div>
            <div className="form-field" style={{ marginBottom: T.spMd }}>
              <label className="form-label">Votre projet</label>
              <textarea
                name="project"
                placeholder="Décrivez votre projet en quelques lignes..."
                className="form-input"
                required
              />
            </div>
            {error && (
              <p style={{
                fontFamily: T.sans,
                fontSize: T.fsSm,
                fontWeight: 300,
                color: T.accent,
                margin: `0 0 ${T.spSm}`,
              }}>
                Une erreur est survenue. Réessayez ou écrivez-moi directement à hfreshnel@gmail.com.
              </p>
            )}
            <button type="submit" className="btn-primary" disabled={loading} style={{ opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Envoi...' : 'Envoyer →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
