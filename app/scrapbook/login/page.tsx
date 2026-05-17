'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') ?? '/scrapbook'

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth/scrapbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push(from)
    } else {
      const data = await res.json() as { message?: string }
      setError(data.message ?? 'Mot de passe incorrect.')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '380px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        .login-input:focus { outline: none; border-color: #c4614a !important; }
        .login-btn:hover { background: #a84f3c !important; }
        .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        ::placeholder { color: #b5a99e; font-family: 'Jost', sans-serif; font-weight: 300; }
      `}</style>

      <div style={{
        background: '#fff8f4',
        border: '1px solid #e8ddd3',
        borderRadius: '2px',
        padding: '48px 40px 40px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#c4614a',
          height: '4px',
          width: '48px',
          borderRadius: '2px',
        }} />

        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '13px',
          color: '#9a8878',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>Espace privé</div>

        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '32px',
          color: '#3d342b',
          marginBottom: '32px',
          lineHeight: 1.1,
        }}>Notre Petit Monde</div>

        <input
          className="login-input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #e8ddd3',
            borderRadius: '2px',
            background: '#fff',
            fontFamily: "'Jost', sans-serif",
            fontSize: '14px',
            color: '#3d342b',
            marginBottom: '12px',
            transition: 'border-color 0.2s',
          }}
        />

        {error && (
          <div style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '12px',
            color: '#c4614a',
            marginBottom: '12px',
            letterSpacing: '0.02em',
          }}>{error}</div>
        )}

        <button
          className="login-btn"
          type="submit"
          disabled={loading || !password}
          style={{
            width: '100%',
            padding: '12px',
            background: '#c4614a',
            color: '#fff',
            border: 'none',
            borderRadius: '2px',
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {loading ? 'Un instant...' : 'Entrer'}
        </button>
      </div>
    </form>
  )
}

export default function ScrapbookLogin() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#faf9f7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </div>
  )
}
