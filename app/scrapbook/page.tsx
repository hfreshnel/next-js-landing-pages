'use client'

import { Helicopter, Heart, BookOpen, MapPin } from 'lucide-react'

const CDN = process.env.NEXT_PUBLIC_SCRAPBOOK_CDN ?? ''

interface Photo {
  id: string
  src: string
  alt: string
  caption: string
  rotation: number
}

interface Book {
  id: string
  title: string
  author: string
  cover: string
  quote: string
  note: string
  hearts: number
}

interface Destination {
  id: string
  label: string
}

const photos: Photo[] = [
  { id: 'p1', src: `${CDN}/Photo/photo-1.jpg`, alt: 'Souvenir 1', caption: 'la plus belle des rencontres', rotation: -2.5 },
  { id: 'p2', src: `${CDN}/Photo/photo-2.jpg`, alt: 'Souvenir 2', caption: 'quelque part en 2024', rotation: 1.8 },
  { id: 'p3', src: `${CDN}/Photo/photo-3.jpg`, alt: 'Souvenir 3', caption: 'euh...', rotation: -1.2 },
  { id: 'p4', src: `${CDN}/Photo/photo-4.jpg`, alt: 'Souvenir 4', caption: 'elle sourit comme ça', rotation: 3.0 },
]

const books: Book[] = [
  {
    id: 'b1',
    title: 'Crime et Châtiment',
    author: 'Fiodor Dostoïevski',
    cover: `${CDN}/Bibliothèque/crime-chatiment.jpg`,
    quote: '"La souffrance et la douleur sont inévitables pour une grande intelligence et un grand cœur."',
    note: 'Ta note personnelle ici - ce qu\'on a pensé ensemble, ce qui nous a touchés...',
    hearts: 3,
  },
]

const destinations: Destination[] = [
  { id: 'd1', label: 'Bangkok - manger des Pad Thaï au marché nocturne' },
  { id: 'd2', label: 'Chiang Mai - temples, forêts et éléphants' },
  { id: 'd3', label: 'Îles Phi Phi - eau turquoise et falaises calcaires' },
  { id: 'd4', label: 'Pai - petite ville dans les montagnes du nord' },
  { id: 'd5', label: 'Koh Lanta - farniente et couchers de soleil' },
  { id: 'd6', label: 'Le Cabaret - une soirée folle à Paris' },
  { id: 'd7', label: "L'Opéra - s'habiller bien et faire semblant de tout comprendre" },
]

const HELICOPTER_GOAL = 2_500_000
const HELICOPTER_RAISED = 247.50
const HELICOPTER_PERCENT = ((HELICOPTER_RAISED / HELICOPTER_GOAL) * 100).toFixed(2)

export default function ScrapbookPage() {
  return (
    <div style={{ background: '#faf9f7', color: '#3d342b', minHeight: '100vh', fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: ${HELICOPTER_PERCENT}%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        .a0 { animation: fadeIn  0.6s ease 0.0s both; }
        .a1 { animation: fadeUp  0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .a2 { animation: fadeUp  0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .a3 { animation: fadeUp  0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
        .a4 { animation: fadeUp  0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .a5 { animation: fadeUp  0.8s cubic-bezier(0.16,1,0.3,1) 0.65s both; }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(28px, 4vw, 38px);
          color: #3d342b;
          margin-bottom: 8px;
        }
        .section-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c4614a;
          margin-bottom: 12px;
        }
        .section-divider {
          width: 40px;
          height: 2px;
          background: #e8ddd3;
          margin-bottom: 40px;
        }

        .polaroid {
          background: #fff;
          padding: 14px 14px 48px;
          box-shadow: 3px 5px 18px rgba(60,42,28,0.10), 0 1px 4px rgba(60,42,28,0.06);
          cursor: default;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .polaroid:hover {
          box-shadow: 6px 10px 30px rgba(60,42,28,0.18);
        }
        .polaroid-img-wrap {
          width: 100%;
          aspect-ratio: 1;
          background: #e0d8ce;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .polaroid-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .polaroid-placeholder {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          color: #b5a99e;
          letter-spacing: 0.06em;
        }
        .polaroid-caption {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #7a6a5a;
          text-align: center;
          margin-top: 14px;
          letter-spacing: 0.04em;
          font-style: italic;
        }

        .book-card {
          background: #fff8f4;
          border: 1px solid #e8ddd3;
          overflow: hidden;
          max-width: 520px;
          margin: 0 auto;
        }
        .book-cover-wrap {
          width: 100%;
          height: 200px;
          background: #e8ddd3;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .book-cover-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .book-cover-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: #b5a99e;
        }

        .dest-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .dest-item:last-child { border-bottom: none; }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(20px, 4vw, 36px);
          max-width: 640px;
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          .photo-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .page-x { padding-left: 24px !important; padding-right: 24px !important; }
          .heli-card { padding: 32px 24px !important; }
          .thailand-card { min-height: 280px !important; }
        }
      `}</style>

      {/* ── Header ── */}
      <header className="page-x a0" style={{ textAlign: 'center', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px) 48px' }}>
        <div style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#c4614a',
          marginBottom: '16px',
        }}>depuis le début</div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(42px, 7vw, 72px)',
          fontWeight: 300,
          color: '#3d342b',
          lineHeight: 1.05,
          marginBottom: '20px',
        }}>Notre Petit Monde</h1>

        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '14px',
          fontWeight: 300,
          color: '#7a6a5a',
          letterSpacing: '0.04em',
          maxWidth: '360px',
          margin: '0 auto',
        }}>
          Un petit album pour nous. Photos, livres, projets, rêves.
        </p>
      </header>

      {/* ── Section 1 : Fonds Hélicoptère ── */}
      <section className="page-x a2" style={{ padding: '0 clamp(24px, 6vw, 80px) 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-label">Priorité nationale</div>
          <h2 className="section-title">Le Fonds Hélicoptère</h2>
          <div className="section-divider" />

          <div className="heli-card" style={{
            background: '#fff8f4',
            border: '1px solid #e8ddd3',
            borderRadius: '2px',
            padding: '40px 40px 36px',
            maxWidth: '580px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                background: '#fef0ec',
                borderRadius: '50%',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                animation: 'float 3s ease-in-out infinite',
              }}>
                <Helicopter size={32} color="#c4614a" />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontSize: '22px',
                  color: '#3d342b',
                  lineHeight: 1.2,
                }}>
                  Objectif : un hélicoptère personnel
                </div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '12px',
                  color: '#9a8878',
                  marginTop: '4px',
                }}>Budget estimé : 2 500 000 €</div>
              </div>
            </div>

            <div style={{
              background: '#e8ddd3',
              borderRadius: '999px',
              height: '8px',
              width: '100%',
              overflow: 'hidden',
              marginBottom: '10px',
            }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg, #c4614a, #d4856a)',
                borderRadius: '999px',
                animation: `progressFill 2.4s cubic-bezier(0.16,1,0.3,1) 0.6s both`,
                width: `${HELICOPTER_PERCENT}%`,
              }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: '#9a8878' }}>
                {HELICOPTER_RAISED.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} récoltés
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '14px',
                color: '#c4614a',
                fontWeight: 600,
              }}>
                {HELICOPTER_PERCENT}% - en bonne voie
              </span>
            </div>

            <div style={{
              background: '#fef0ec',
              border: '1px dashed #e8a090',
              borderRadius: '2px',
              padding: '14px 16px',
            }}>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '13px',
                color: '#7a6a5a',
                lineHeight: 1.6,
                fontWeight: 300,
              }}>
                Il manque encore <strong style={{ color: '#c4614a', fontWeight: 500 }}>
                  {(HELICOPTER_GOAL - HELICOPTER_RAISED).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </strong>.
                {' '}Au rythme actuel, l&apos;hélicoptère devrait arriver vers 2847.
                On reste optimistes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 : Polaroids ── */}
      <section className="page-x a3" style={{ padding: '0 clamp(24px, 6vw, 80px) 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-label">Nos souvenirs</div>
          <h2 className="section-title">La Galerie</h2>
          <div className="section-divider" />

          <div className="photo-grid">
            {photos.map((p) => (
              <div
                key={p.id}
                className="polaroid"
                style={{ transform: `rotate(${p.rotation}deg)` }}
              >
                <div className="polaroid-img-wrap">
                  <img
                    src={p.src}
                    alt={p.alt}
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const placeholder = parent.querySelector('.polaroid-placeholder') as HTMLElement | null
                        if (placeholder) placeholder.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="polaroid-placeholder" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '24px', opacity: 0.4 }}>📷</span>
                    <span>photo à venir</span>
                  </div>
                </div>
                <p className="polaroid-caption">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 : Bibliothèque ── */}
      <section className="page-x a3" style={{ padding: '0 clamp(24px, 6vw, 80px) 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-label">Lus ensemble</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>La Bibliothèque</h2>
            <BookOpen size={22} color="#9a8878" style={{ marginBottom: '2px' }} />
          </div>
          <div className="section-divider" />

          <div>
            {books.map((b) => (
              <div key={b.id} className="book-card">
                <div className="book-cover-wrap">
                  <img
                    src={b.cover}
                    alt={b.title}
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const placeholder = parent.querySelector('.book-cover-placeholder') as HTMLElement | null
                        if (placeholder) placeholder.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="book-cover-placeholder" style={{ display: 'none' }}>
                    <BookOpen size={40} color="#c4b0a0" />
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: '#b5a99e' }}>couverture</span>
                  </div>
                </div>

                <div style={{ padding: '28px 28px 24px' }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontSize: '24px',
                    color: '#3d342b',
                    marginBottom: '4px',
                  }}>{b.title}</div>

                  <div style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#9a8878',
                    marginBottom: '20px',
                  }}>{b.author}</div>

                  <blockquote style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontSize: '17px',
                    color: '#5a4a3a',
                    lineHeight: 1.65,
                    borderLeft: '2px solid #c4614a',
                    paddingLeft: '16px',
                    marginBottom: '18px',
                  }}>{b.quote}</blockquote>

                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#7a6a5a',
                    lineHeight: 1.75,
                    marginBottom: '20px',
                  }}>{b.note}</p>

                  <div style={{ display: 'flex', gap: '4px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Heart
                        key={i}
                        size={16}
                        color="#c4614a"
                        fill={i < b.hearts ? '#c4614a' : 'none'}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 : Passeport des Envies ── */}
      <section className="page-x a4" style={{ padding: '0 clamp(24px, 6vw, 80px) 100px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-label">Prochain chapitre</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Le Passeport des Envies</h2>
            <MapPin size={20} color="#9a8878" style={{ marginBottom: '2px' }} />
          </div>
          <div className="section-divider" />

          {/* Thailand hero card */}
          <div
            className="thailand-card"
            style={{
              position: 'relative',
              minHeight: '340px',
              background: 'linear-gradient(135deg, #1a6b5a 0%, #1a4a7a 45%, #6b3a2a 100%)',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '28px',
            }}
          >
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(20,10,5,0.88) 0%, rgba(20,10,5,0.20) 55%, transparent 100%)',
            }} />

            {/* Top badge */}
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '2px',
              padding: '6px 14px',
            }}>
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                color: 'rgba(255,240,220,0.9)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>Rêve #1</span>
            </div>

            {/* Content */}
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '28px 32px' }}>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '11px',
                color: 'rgba(255,220,180,0.7)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>Asie du Sud-Est</div>

              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(38px, 6vw, 56px)',
                color: '#fff5e8',
                lineHeight: 1.0,
                marginBottom: '20px',
              }}>Thaïlande</div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
                {destinations.map((d) => (
                  <div key={d.id} className="dest-item">
                    <Heart size={13} color="#c4614a" fill="#c4614a" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'rgba(255,240,220,0.88)',
                      lineHeight: 1.5,
                    }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Helicopter status badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px dashed #c4b0a0',
            borderRadius: '2px',
            padding: '12px 18px',
            transform: 'rotate(-0.5deg)',
          }}>
            <Helicopter size={14} color="#9a8878" />
            <span style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px',
              fontWeight: 300,
              color: '#7a6a5a',
              letterSpacing: '0.04em',
              fontStyle: 'italic',
            }}>
              Départ conditionnel à la récupération du Fonds Hélicoptère ({HELICOPTER_PERCENT}%)
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
