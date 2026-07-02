'use client'

import { useState, useEffect } from 'react'
import { T } from '@/lib/design'

const SLIDES = [
  ['Du premier prompt.', 'Au premier client.'],
  ["L'IA génère.", 'Nous construisons.'],
  ['Vous avez le prompt.', 'Nous avons le produit.'],
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % SLIDES.length), 4000)
    return () => clearInterval(id)
  }, [])

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{ padding: `${T.spLg} 0`, background: `radial-gradient(ellipse at 18% 42%, ${T.heroGlow} 0%, ${T.dark} 62%)` }}>
      <div className="wrap" style={{
        display: 'flex',
        gap: T.spLg,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        {/* Left Column - 50% */}
        <div style={{
          flex: '1 1 0%',
          minWidth: '320px',
        }}>
          <p className="a1 section-label" style={{ margin: `0 0 ${T.spMd}` }}>Votre partenaire tech</p>

          <div style={{ overflow: 'hidden', width: '100%' }}>
            <div style={{
              display: 'flex',
              width: '100%',
              transform: `translateX(-${active * 100}%)`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              {SLIDES.map((lines, i) => (
                <h1 key={i} style={{
                  flex: '0 0 100%',
                  minWidth: '100%',
                  maxWidth: '100%',
                  margin: 0,
                  padding: 0,
                  overflow: 'hidden',
                }}>
                  {lines.map((line, j) => (
                    <span key={j} style={{
                      display: 'block',
                      fontFamily: T.serif,
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 'clamp(36px, 5.5vw, 68px)',
                      lineHeight: j === 0 ? 1.05 : 1.1,
                      color: T.light,
                      letterSpacing: '-0.02em',
                    }}>{line}</span>
                  ))}
                </h1>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px', margin: `${T.spSm} 0 ${T.spMd}` }}>
            {SLIDES.map((_, i) => (
              <span key={i} style={{
                display: 'block',
                width: '18px',
                height: '2px',
                borderRadius: '1px',
                background: T.mid,
                opacity: i === active ? 0.9 : 0.25,
                transition: 'opacity 0.4s',
              }} />
            ))}
          </div>

          <button className="a5 btn-primary" onClick={scrollToContact}>
            Discutons de votre projet →
          </button>
        </div>

        {/* Right Column - image */}
        <div className="hero-image-col" style={{
          flex: '1 1 0%',
          minWidth: '320px',
          position: 'relative',
          overflow: 'visible',
          display: 'flex',
          alignItems: 'center',
        }}>
          <img
            src="/images/hero.png"
            alt=""
            style={{
              width: '112%',
              maxWidth: 'none',
              marginTop: '-24px',
              marginRight: '-40px',
              opacity: 0.78,
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </div>

        <style>{`
          @media (max-width: ${T.bp768}) {
            .hero-image-col { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
