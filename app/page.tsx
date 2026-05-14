'use client'

import Link from 'next/link'

const projects = [
  {
    id: 'pulapay',
    name: 'Pula Pay',
    desc: 'Fintech systems + product vision',
    index: '01',
    href: 'https://www.pulapay.app/',
  },
  {
    id: 'metrique',
    name: 'MÉTRIQUE',
    desc: 'Scalable distributed architecture',
    index: '02',
    href: '/landing/metrique',
  },
  {
    id: 'peerdu',
    name: 'Peerdu',
    desc: 'Modern realtime product engineering',
    index: '03',
    href: '/landing/peerdu',
  },
  {
    id: 'stio',
    name: 'STIO',
    desc: 'Low-level systems engineering',
    index: '04',
    href: '/landing/stio',
  },
  {
    id: 'appartlink',
    name: 'AppartLink',
    desc: 'SaaS / product ambition',
    index: '05',
    href: '/landing/appartlink',
  },
]

export default function IndexPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .a0 { animation: fadeIn  0.5s ease                            0.00s both; }
        .a1 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.10s both; }
        .a2 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.25s both; }
        .a3 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.35s both; }
        .a4 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.50s both; }
        .a5 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.65s both; }
        .a6 { animation: fadeIn  0.6s ease                            1.00s both; }

        .a-line {
          transform-origin: left;
          animation: lineExpand 1.1s cubic-bezier(0.16,1,0.3,1) 0.60s both;
        }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5a5248;
          text-decoration: none;
          border-bottom: 1px solid #2a2620;
          padding-bottom: 2px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .nav-link:hover {
          color: #c4935a;
          border-color: #c4935a;
        }

        .project-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #1c1a16;
          text-decoration: none;
          color: #d8d0c3;
          transition: color 0.25s ease;
        }
        .project-row:first-child { border-top: 1px solid #1c1a16; }
        .project-row:hover { color: #c4935a; }
        .project-row:hover .p-arrow {
          transform: translateX(5px);
          color: #c4935a;
        }

        .p-arrow {
          margin-left: auto;
          color: #3a3530;
          font-size: 15px;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        @media (max-width: 600px) {
          .page-x { padding-left: 24px !important; padding-right: 24px !important; }
          .p-desc { display: none !important; }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 18% 42%, #1b1710 0%, #0d0c0a 62%)',
        color: '#d8d0c3',
        fontFamily: "'Jost', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Nav */}
        <nav className="a0 page-x" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '36px 56px',
        }}>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#d8d0c3',
          }}>
            hfreshnel
          </span>
          <a href="mailto:hfreshnel@gmail.com" className="nav-link">
            Available for work
          </a>
        </nav>

        {/* Hero */}
        <section className="page-x" style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 56px 96px',
        }}>
          <p className="a1" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: '#c4935a',
            margin: '0 0 38px',
          }}>
            Fullstack Engineer
          </p>

          <h1 style={{ margin: '0 0 52px', padding: 0 }}>
            <span className="a2" style={{
              display: 'block',
              fontFamily: "'Cormorant', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(54px, 9vw, 108px)',
              lineHeight: 1.0,
              color: '#ddd5c8',
              letterSpacing: '-0.02em',
            }}>
              I build systems
            </span>
            <span className="a3" style={{
              display: 'block',
              fontFamily: "'Cormorant', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(54px, 9vw, 108px)',
              lineHeight: 1.05,
              color: '#ddd5c8',
              letterSpacing: '-0.02em',
            }}>
              that move people.
            </span>
          </h1>

          <div className="a-line" style={{
            height: '1px',
            background: '#1e1c18',
            maxWidth: '460px',
            marginBottom: '32px',
          }} />

          <p className="a4" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '14px',
            fontWeight: 300,
            color: '#5a5248',
            margin: 0,
            maxWidth: '360px',
            lineHeight: 1.8,
            letterSpacing: '0.01em',
          }}>
            From distributed architectures to immersive interfaces.
            I engineer robust systems and craft digital experiences
            that leave a lasting impression.
          </p>
        </section>

        {/* Work */}
        <section className="a5 page-x" style={{
          padding: '0 56px 80px',
          maxWidth: '860px',
          width: '100%',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: '#3a3530',
            margin: '0 0 0',
          }}>
            Selected work
          </p>
          <div>
            {projects.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="project-row"
                {...(p.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: '#3a3530',
                  minWidth: '26px',
                }}>
                  {p.index}
                </span>
                <span style={{
                  fontFamily: "'Cormorant', serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(26px, 3.5vw, 34px)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                }}>
                  {p.name}
                </span>
                <span className="p-desc" style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '13px',
                  fontWeight: 300,
                  color: '#3a3530',
                  letterSpacing: '0.02em',
                  marginLeft: 'auto',
                  marginRight: '20px',
                }}>
                  {p.desc}
                </span>
                <span className="p-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="a6 page-x" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 56px',
          borderTop: '1px solid #181612',
        }}>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '12px',
            fontWeight: 300,
            color: '#2e2b26',
            letterSpacing: '0.05em',
          }}>
            © 2026 hfreshnel
          </span>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '12px',
            fontWeight: 300,
            color: '#2e2b26',
            letterSpacing: '0.05em',
          }}>
            Engineering &amp; Experience
          </span>
        </footer>

      </div>
    </>
  )
}
