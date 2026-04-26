import type { Metadata } from 'next'
import LandingLayout from '@/components/LandingLayout'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'PeerDù - Les talents étudiants près de chez toi',
  icons: { icon: '/peerdu-logo.png' },
}

const LANDING_ID = 'peerdu'

const services = [
  { emoji: '✂️', label: 'Bien-être & Style', color: '#FF6B4A' },
  { emoji: '🍰', label: 'Cuisine & Pâtisserie', color: '#00C8B4' },
  { emoji: '📚', label: 'Espace Académique', color: '#7B2FBE' },
  { emoji: '🔧', label: 'Services Pratiques', color: '#FF6B4A' },
  { emoji: '🎤', label: 'Événements & Ateliers', color: '#00C8B4' },
]

const steps = [
  {
    n: '01',
    title: 'Trouve ton prestataire',
    body: 'Parcours les profils étudiants vérifiés près de chez toi. Filtre par service, ville, disponibilité.',
  },
  {
    n: '02',
    title: 'Réserve en toute sécurité',
    body: 'Échange via la messagerie interne. Le paiement est bloqué jusqu\'à confirmation des deux parties.',
  },
  {
    n: '03',
    title: 'Profite & évalue',
    body: 'Une fois la prestation confirmée, le paiement est libéré et les avis s\'ouvrent automatiquement.',
  },
]

const features = [
  {
    icon: '✅',
    title: 'Étudiants vérifiés',
    body: 'Chaque prestataire est validé par email universitaire ou carte étudiante. Zéro anonymat, 100% de confiance.',
    accent: '#FF6B4A',
  },
  {
    icon: '📍',
    title: 'Hyper-local',
    body: 'Des talents dans ta ville. PeerDù démarre à Poitiers et s\'étend ville par ville, comme Uber à ses débuts.',
    accent: '#00C8B4',
  },
  {
    icon: '🔒',
    title: 'Paiement sécurisé',
    body: 'Système d\'escrow intégré : ton argent est protégé jusqu\'à confirmation de la prestation. Commission 10% seulement.',
    accent: '#7B2FBE',
  },
]

export default function LandingPeerdu() {
  return (
    <LandingLayout landingId={LANDING_ID} style={{ backgroundColor: '#0e0820', padding: 0, justifyContent: 'flex-start' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-14px) rotate(-1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .peerdu-pill {
          animation: float 4s ease-in-out infinite;
        }
        .peerdu-pill:nth-child(2) { animation-name: floatB; animation-delay: 0.6s; }
        .peerdu-pill:nth-child(3) { animation-delay: 1.1s; }
        .peerdu-pill:nth-child(4) { animation-name: floatB; animation-delay: 1.7s; }
        .peerdu-pill:nth-child(5) { animation-delay: 2.1s; }

        .peerdu-hero-title {
          animation: fadeUp 0.7s ease both;
        }
        .peerdu-hero-sub {
          animation: fadeUp 0.7s 0.15s ease both;
        }
        .peerdu-hero-ctas {
          animation: fadeUp 0.7s 0.3s ease both;
        }
        .peerdu-hero-pills {
          animation: fadeUp 0.7s 0.45s ease both;
        }

        .peerdu-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }
        .peerdu-step-card:hover .peerdu-step-num {
          opacity: 1;
        }

        .peerdu-cta-primary:hover {
          opacity: 0.88;
          transform: translateY(-2px);
        }
        .peerdu-cta-secondary:hover {
          background: rgba(255,255,255,0.12);
        }
      `}</style>

      {/* Reset LandingLayout's centering for full-width sections */}
      <div style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        backgroundColor: '#0e0820',
        color: '#fff',
        overflowX: 'hidden',
      }}>

        {/* ── HERO ── */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px 120px',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #3d1f8a 0%, #2D1B69 40%, #0e0820 100%)',
          overflow: 'hidden',
        }}>
          {/* Background decorative blobs */}
          <div style={{
            position: 'absolute', top: '10%', right: '8%',
            width: 320, height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,74,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '15%', left: '5%',
            width: 260, height: 260,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,200,180,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Wordmark */}
          <div className="peerdu-hero-title" style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(56px, 12vw, 100px)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#fff',
            }}>
              Peer<span style={{ color: '#FF6B4A' }}>Dù</span>
            </span>
          </div>

          <p className="peerdu-hero-sub" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(20px, 4vw, 32px)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.75)',
            textAlign: 'center',
            maxWidth: 640,
            margin: '0 0 16px',
            lineHeight: 1.35,
          }}>
            Les talents étudiants près de chez toi.
          </p>

          <p className="peerdu-hero-sub" style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            maxWidth: 480,
            margin: '0 0 48px',
            lineHeight: 1.6,
            animationDelay: '0.22s',
          }}>
            Cuisine, coiffure, cours, dépannage... des étudiants vérifiés t'aident à Poitiers, et bientôt partout en France.
          </p>

          {/* CTAs */}
          <div className="peerdu-hero-ctas" style={{
            display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center',
            marginBottom: 56,
          }}>
            <CTA
              landingId={LANDING_ID}
              label="Je rejoins la liste d'attente →"
              href="https://docs.google.com/forms/d/e/1FAIpQLScACpTOGql-Kc7ZYO3iVgJ-nFtwv1w8FRLADg2796FDI7lT0Q/viewform"
              metadata={{ position: 'hero-primary' }}
            />
            <a
              href="#how"
              style={{
                display: 'inline-block',
                padding: '16px 36px',
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.85)',
                borderRadius: 10,
                fontWeight: 500,
                fontSize: 16,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              Comment ça marche ?
            </a>
          </div>

          {/* Service pills */}
          <div className="peerdu-hero-pills" style={{
            display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center',
            maxWidth: 600,
          }}>
            {services.map((s) => (
              <span
                key={s.label}
                className="peerdu-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 16px',
                  borderRadius: 100,
                  background: 'rgba(255,255,255,0.06)',
                  border: `1px solid ${s.color}44`,
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span>{s.emoji}</span> {s.label}
              </span>
            ))}
          </div>

          {/* Diagonal cut */}
          <div style={{
            position: 'absolute', bottom: -1, left: 0, right: 0,
            height: 80,
            background: '#0e0820',
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
          }} />
        </section>

        {/* ── FEATURES ── */}
        <section style={{
          padding: '100px 24px',
          background: '#0e0820',
        }}>
          <div style={{ maxWidth: 1060, margin: '0 auto' }}>
            <p style={{
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#00C8B4',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Pourquoi PeerDù
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(30px, 5vw, 48px)',
              fontWeight: 700,
              textAlign: 'center',
              margin: '0 0 64px',
              color: '#fff',
              lineHeight: 1.2,
            }}>
              Une marketplace qui protège<br />
              <span style={{ color: '#FF6B4A' }}>les deux côtés</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}>
              {features.map((f) => (
                <div
                  key={f.title}
                  className="peerdu-feature-card"
                  style={{
                    padding: '36px 32px',
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'transform 0.25s, box-shadow 0.25s',
                  }}
                >
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: 14,
                    background: `${f.accent}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24,
                    marginBottom: 24,
                    border: `1px solid ${f.accent}44`,
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    margin: '0 0 12px',
                    color: '#fff',
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.55)',
                    margin: 0,
                  }}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          id="how"
          style={{
            padding: '100px 24px',
            background: 'linear-gradient(180deg, #0e0820 0%, #1a0f3a 100%)',
            position: 'relative',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#FF6B4A',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Comment ça marche
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 700,
              textAlign: 'center',
              margin: '0 0 72px',
              color: '#fff',
              lineHeight: 1.2,
            }}>
              Simple. Sécurisé. Local.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="peerdu-step-card"
                  style={{
                    display: 'flex',
                    gap: 32,
                    alignItems: 'flex-start',
                    padding: '40px 0',
                    borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  <span
                    className="peerdu-step-num"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 48,
                      fontWeight: 900,
                      color: 'rgba(255,107,74,0.25)',
                      lineHeight: 1,
                      minWidth: 72,
                      transition: 'opacity 0.2s',
                      userSelect: 'none',
                    }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 700,
                      margin: '0 0 10px',
                      color: '#fff',
                    }}>
                      {s.title}
                    </h3>
                    <p style={{
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.5)',
                      margin: 0,
                      maxWidth: 540,
                    }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOR STUDENTS ── */}
        <section style={{
          padding: '100px 24px',
          background: '#0e0820',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: '50%',
            background: 'radial-gradient(ellipse at right, rgba(0,200,180,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 18px',
              borderRadius: 100,
              background: 'rgba(0,200,180,0.12)',
              border: '1px solid rgba(0,200,180,0.3)',
              fontSize: 13,
              fontWeight: 600,
              color: '#00C8B4',
              letterSpacing: '0.08em',
              marginBottom: 28,
              textTransform: 'uppercase',
            }}>
              Pour les étudiants
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(28px, 5vw, 46px)',
              fontWeight: 700,
              margin: '0 0 24px',
              color: '#fff',
              lineHeight: 1.2,
            }}>
              Tes compétences valent de l'argent.{' '}
              <span style={{ color: '#FF6B4A' }}>Fais-les connaître.</span>
            </h2>
            <p style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              margin: '0 auto 48px',
              maxWidth: 580,
            }}>
              Crée ton profil en 4 étapes, fixe tes tarifs librement et reçois 90% de chaque transaction. PeerDù s'occupe du reste : vérification, paiement, litiges.
            </p>
            <div style={{
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {['💸 90% reversés', '🎓 Profil vérifié', '🗓 Agenda flexible', '⭐ Avis publics'].map((tag) => (
                <span key={tag} style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.65)',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '8px 18px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{
          padding: '120px 24px 140px',
          background: 'linear-gradient(135deg, #2D1B69 0%, #1a0d40 50%, #0e0820 100%)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          <div style={{
            position: 'absolute', top: '20%', left: '15%',
            width: 280, height: 280, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,74,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '10%', right: '10%',
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,200,180,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(34px, 6vw, 58px)',
              fontWeight: 900,
              margin: '0 0 20px',
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              Poitiers, c'est le début.<br />
              <span style={{ color: '#FF6B4A' }}>Rejoins l'aventure.</span>
            </h2>
            <p style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 52px',
              maxWidth: 480,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              La liste d'attente est ouverte. Prestataires et utilisateurs, inscris-toi maintenant et fais partie des premiers sur la plateforme.
            </p>

            <CTA
              landingId={LANDING_ID}
              label="Je m'inscris sur peerdu"
              href="https://docs.google.com/forms/d/e/1FAIpQLScACpTOGql-Kc7ZYO3iVgJ-nFtwv1w8FRLADg2796FDI7lT0Q/viewform"
              metadata={{ position: 'final-cta', section: 'footer' }}
            />

            <p style={{
              marginTop: 28,
              fontSize: 13,
              color: 'rgba(255,255,255,0.3)',
            }}>
              Lancement à Poitiers · 100% gratuit pour les premiers inscrits
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          padding: '32px 24px',
          background: '#080514',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.6)',
          }}>
            Peer<span style={{ color: '#FF6B4A' }}>Dù</span>
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>·</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            © 2026 · peerdu.fr
          </span>
        </footer>
      </div>
    </LandingLayout>
  )
}
