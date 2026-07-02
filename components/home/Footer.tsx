'use client'

import { T } from '@/lib/design'

export default function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${T.border}`,
      padding: `${T.spMd} 0`,
    }}>
      <div className="wrap" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `0 ${T.pageX}`,
      }}>
        <span style={{
          fontFamily: T.serif,
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: T.fsLogo,
          color: T.mid,
        }}>
          HFreshnel
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: T.spMd }}>
          <a href="https://linkedin.com/in/hfreshnel" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="https://github.com/hfreshnel" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <span style={{
            fontFamily: T.sans,
            fontSize: T.fsSm,
            fontWeight: 300,
            color: T.mid,
            letterSpacing: '0.05em',
          }}>
            © 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
